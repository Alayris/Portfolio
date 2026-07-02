import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const MAP_FILE = path.join(ROOT, "scripts", "cloudinary-map.json");
const TARGET_DIRS = ["app", "components", "lib"];
const EXT = new Set([".ts", ".tsx"]);

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await listFiles(full));
    } else if (EXT.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function normKey(k) {
  return k.normalize("NFC").toLowerCase();
}

async function main() {
  const map = JSON.parse(await readFile(MAP_FILE, "utf8"));
  const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length);
  const normIndex = new Map(entries.map(([k, v]) => [normKey(k), v]));

  let totalReplacements = 0;
  let fallbackReplacements = 0;
  const missing = new Set(entries.map(([k]) => k));
  const unresolved = [];

  for (const dir of TARGET_DIRS) {
    const files = await listFiles(path.join(ROOT, dir));
    for (const file of files) {
      let content = await readFile(file, "utf8");
      let changed = false;

      for (const [localPath, cloudUrl] of entries) {
        if (content.includes(localPath)) {
          content = content.split(localPath).join(cloudUrl);
          changed = true;
          totalReplacements++;
          missing.delete(localPath);
        }
      }

      content = content.replace(/"(\/images\/[^"]*)"/g, (full, p1) => {
        const url = normIndex.get(normKey(p1));
        if (url) {
          changed = true;
          fallbackReplacements++;
          return `"${url}"`;
        }
        unresolved.push({ file: path.relative(ROOT, file), ref: p1 });
        return full;
      });

      if (changed) {
        await writeFile(file, content, "utf8");
        console.log("Updated: " + path.relative(ROOT, file));
      }
    }
  }

  console.log(`\nExact replacements: ${totalReplacements}`);
  console.log(`Fallback (case/unicode-insensitive) replacements: ${fallbackReplacements}`);
  console.log(`Map entries never referenced in code: ${missing.size}`);
  if (unresolved.length) {
    console.log(`\nUNRESOLVED references (still local paths, need manual fix):`);
    unresolved.forEach((u) => console.log(`  ${u.file}: ${u.ref}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
