#!/usr/bin/env python3
"""Upload public/images to Cloudflare R2 and build a cloudinary-url -> r2-url map."""
import json
import mimetypes
import os
from pathlib import Path

import boto3
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent.parent
load_dotenv(ROOT / ".env")

ACCOUNT_ID = os.environ["R2_ACCOUNT_ID"]
ACCESS_KEY = os.environ["R2_ACCESS_KEY_ID"]
SECRET_KEY = os.environ["R2_SECRET_ACCESS_KEY"]
BUCKET = os.environ["R2_BUCKET"]
PUBLIC_URL = os.environ["R2_PUBLIC_URL"].rstrip("/")

PUBLIC_IMAGES = ROOT / "public" / "images"
CLOUDINARY_MAP_FILE = ROOT / "scripts" / "cloudinary-map.json"
R2_MAP_FILE = ROOT / "scripts" / "r2-map.json"

SKIP_EXT = {".zip"}
SKIP_NAMES = {".DS_Store"}

s3 = boto3.client(
    "s3",
    endpoint_url=f"https://{ACCOUNT_ID}.r2.cloudflarestorage.com",
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    region_name="auto",
)


def list_files(root: Path):
    for p in root.rglob("*"):
        if p.is_file() and p.suffix.lower() not in SKIP_EXT and p.name not in SKIP_NAMES:
            yield p


def main():
    cloudinary_map = {}
    if CLOUDINARY_MAP_FILE.exists():
        cloudinary_map = json.loads(CLOUDINARY_MAP_FILE.read_text())

    r2_map = {}
    if R2_MAP_FILE.exists():
        r2_map = json.loads(R2_MAP_FILE.read_text())

    files = sorted(list_files(PUBLIC_IMAGES))
    print(f"Found {len(files)} files to upload.")

    done = skipped = failed = 0
    cloudinary_to_r2 = {}

    for abs_path in files:
        rel_key = "images/" + str(abs_path.relative_to(PUBLIC_IMAGES)).replace(os.sep, "/")
        local_ref = "/" + rel_key
        r2_url = f"{PUBLIC_URL}/{rel_key}"

        if local_ref not in r2_map:
            content_type, _ = mimetypes.guess_type(str(abs_path))
            size_mb = abs_path.stat().st_size / 1024 / 1024
            print(f"Uploading {rel_key} ({size_mb:.1f}MB)... ", end="", flush=True)
            try:
                extra = {"ContentType": content_type} if content_type else {}
                s3.upload_file(str(abs_path), BUCKET, rel_key, ExtraArgs=extra)
                r2_map[local_ref] = r2_url
                done += 1
                print("OK")
            except Exception as e:
                failed += 1
                print(f"FAILED: {e}")
                continue
            R2_MAP_FILE.write_text(json.dumps(r2_map, indent=2))
        else:
            skipped += 1

        cloud_url = cloudinary_map.get(local_ref)
        if cloud_url:
            cloudinary_to_r2[cloud_url] = r2_url

    R2_MAP_FILE.write_text(json.dumps(r2_map, indent=2))

    remap_file = ROOT / "scripts" / "cloudinary-to-r2-map.json"
    remap_file.write_text(json.dumps(cloudinary_to_r2, indent=2))

    print(f"\nDone. Uploaded: {done}, Skipped(existing): {skipped}, Failed: {failed}")
    print(f"R2 map written to {R2_MAP_FILE}")
    print(f"Cloudinary->R2 remap written to {remap_file} ({len(cloudinary_to_r2)} entries)")


if __name__ == "__main__":
    main()
