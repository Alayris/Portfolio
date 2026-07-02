import { execFile } from "node:child_process";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_IMAGES = path.join(ROOT, "public", "images");
const MAP_FILE = path.join(ROOT, "scripts", "cloudinary-map.json");
const MAX_BYTES = 9.5 * 1024 * 1024;
const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg"]);

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(await listFiles(full));
    else files.push(full);
  }
  return files;
}

async function main() {
  let map = {};
  try {
    map = JSON.parse(await readFile(MAP_FILE, "utf8"));
  } catch {}

  const files = await listFiles(PUBLIC_IMAGES);
  const candidates = files.filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()));

  let resized = 0;
  for (const absPath of candidates) {
    const relKey = "/images/" + path.relative(PUBLIC_IMAGES, absPath).split(path.sep).join("/");
    if (map[relKey]) continue; // already uploaded successfully

    const size = (await stat(absPath)).size;
    if (size <= MAX_BYTES) continue; // not oversized, some other failure reason

    let dims = [2200, 1800, 1400, 1000, 700];
    for (const d of dims) {
      await execFileAsync("sips", ["-Z", String(d), absPath]);
      const newSize = (await stat(absPath)).size;
      console.log(`${relKey}: resized to max ${d}px -> ${(newSize / 1024 / 1024).toFixed(2)}MB`);
      if (newSize <= MAX_BYTES) {
        resized++;
        break;
      }
    }
  }
  console.log(`\nResized ${resized} oversized images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
