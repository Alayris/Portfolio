#!/bin/bash
set -e
FFMPEG="$HOME/bin/ffmpeg"
cd "$(dirname "$0")/.."

FILES=(
  "public/images/graphisme/kizuna/11.mp4"
  "public/images/motion/ONEPOINT/SHOWREEL_3_1920x1080px_251209_am.mp4"
  "public/images/motion/ONEPOINT/opl_noar_live_stories_1920x1080px_260206_am.mp4"
  "public/images/motion/REPLI/38.MP4"
  "public/images/motion/Rayquaza/1.mp4"
  "public/images/motion/Rayquaza/12.mp4"
)

for f in "${FILES[@]}"; do
  echo "=== Compressing: $f ==="
  tmp="${f}.compressed.mp4"
  "$FFMPEG" -y -i "$f" -vcodec libx264 -crf 26 -preset fast -vf "scale='min(1920,iw)':-2" -acodec aac -b:a 128k -movflags +faststart "$tmp"
  orig_size=$(stat -f%z "$f")
  new_size=$(stat -f%z "$tmp")
  echo "Original: $((orig_size/1024/1024))MB -> Compressed: $((new_size/1024/1024))MB"
  mv "$tmp" "$f"
done

echo "All done."
