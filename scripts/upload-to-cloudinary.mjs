import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const CLOUD_NAME = "kust8hzr";
const UPLOAD_PRESET = "portfolio_Amaris";
const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_IMAGES = path.join(ROOT, "public", "images");
const MAP_FILE = path.join(ROOT, "scripts", "cloudinary-map.json");

const VIDEO_EXT = new Set([".mp4", ".mov"]);
const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg"]);

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await listFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function resourceTypeFor(ext) {
  if (VIDEO_EXT.has(ext)) return "video";
  if (IMAGE_EXT.has(ext)) return "image";
  return null;
}

async function uploadFile(absPath, relKey) {
  const ext = path.extname(absPath).toLowerCase();
  const resourceType = resourceTypeFor(ext);
  if (!resourceType) return null;

  const buffer = await readFile(absPath);
  const blob = new Blob([buffer]);
  const form = new FormData();
  form.append("file", blob, path.basename(absPath));
  form.append("upload_preset", UPLOAD_PRESET);
  const folder = "portfolio/" + path.dirname(relKey).replace(/\\/g, "/");
  form.append("folder", folder);

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`;
  const res = await fetch(url, { method: "POST", body: form });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Upload failed for ${relKey}: ${JSON.stringify(json)}`);
  }
  return json.secure_url;
}

async function main() {
  let existingMap = {};
  try {
    existingMap = JSON.parse(await readFile(MAP_FILE, "utf8"));
  } catch {}

  const files = await listFiles(PUBLIC_IMAGES);
  const targets = files.filter((f) => resourceTypeFor(path.extname(f).toLowerCase()));

  console.log(`Found ${targets.length} media files to upload.`);

  const map = { ...existingMap };
  let done = 0;
  let skipped = 0;
  let failed = 0;

  for (const absPath of targets) {
    const relKey = "/images/" + path.relative(PUBLIC_IMAGES, absPath).split(path.sep).join("/");
    if (map[relKey]) {
      skipped++;
      continue;
    }
    try {
      const size = (await stat(absPath)).size;
      process.stdout.write(`Uploading ${relKey} (${(size / 1024 / 1024).toFixed(1)}MB)... `);
      const secureUrl = await uploadFile(absPath, relKey);
      map[relKey] = secureUrl;
      done++;
      console.log("OK");
    } catch (err) {
      failed++;
      console.log("FAILED: " + err.message);
    }
    await writeFile(MAP_FILE, JSON.stringify(map, null, 2));
  }

  console.log(`\nDone. Uploaded: ${done}, Skipped(existing): ${skipped}, Failed: ${failed}`);
  console.log(`Map written to ${MAP_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
