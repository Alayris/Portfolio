#!/usr/bin/env python3
"""Replace res.cloudinary.com URLs in the codebase with their R2 equivalents."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REMAP_FILE = ROOT / "scripts" / "cloudinary-to-r2-map.json"
TARGET_DIRS = ["app", "components", "lib"]
EXTENSIONS = {".ts", ".tsx"}


def list_files(root: Path):
    for p in root.rglob("*"):
        if p.is_file() and p.suffix in EXTENSIONS:
            yield p


def main():
    remap = json.loads(REMAP_FILE.read_text())
    entries = sorted(remap.items(), key=lambda kv: -len(kv[0]))

    total_replacements = 0
    files_changed = 0
    used_keys = set()

    for d in TARGET_DIRS:
        for f in list_files(ROOT / d):
            content = f.read_text(encoding="utf-8")
            original = content
            for cloud_url, r2_url in entries:
                if cloud_url in content:
                    count = content.count(cloud_url)
                    content = content.replace(cloud_url, r2_url)
                    total_replacements += count
                    used_keys.add(cloud_url)
            if content != original:
                f.write_text(content, encoding="utf-8")
                files_changed += 1
                print(f"Updated: {f.relative_to(ROOT)}")

    unused = len(entries) - len(used_keys)
    print(f"\nFiles changed: {files_changed}")
    print(f"Total replacements: {total_replacements}")
    print(f"Map entries never referenced in code: {unused}")


if __name__ == "__main__":
    main()
