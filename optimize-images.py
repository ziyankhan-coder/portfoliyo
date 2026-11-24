#!/usr/bin/env python3
"""Convert PNG/JPG images under assets/ to compressed WebP (run from the project root).

    pip install pillow
    python tools/optimize-images.py

Writes a .webp next to each original (same name). content.js already points at
the .webp names. Delete the originals once you have checked the output.
Also recompresses ziyan.webp if it is larger than 120 KB.
"""
import os, sys
from PIL import Image

MAX_W = {"projects": 1280, "certs": 960}
QUALITY = 80

def convert(src, max_w):
    dst = os.path.splitext(src)[0] + ".webp"
    with Image.open(src) as im:
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        if im.width > max_w:
            im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
        im.save(dst, "WEBP", quality=QUALITY, method=6)
    print(f"{src} -> {dst}  {os.path.getsize(src)//1024} KB -> {os.path.getsize(dst)//1024} KB")

def main():
    if not os.path.isdir("assets"):
        sys.exit("Run this from the project root (the folder that contains assets/).")
    for folder, max_w in MAX_W.items():
        base = os.path.join("assets", folder)
        if not os.path.isdir(base):
            continue
        for name in sorted(os.listdir(base)):
            if name.lower().endswith((".png", ".jpg", ".jpeg")):
                convert(os.path.join(base, name), max_w)

    if os.path.exists("ziyan.webp") and os.path.getsize("ziyan.webp") > 120 * 1024:
        with Image.open("ziyan.webp") as im:
            im = im.convert("RGBA")
            if im.width > 800:
                im = im.resize((800, round(im.height * 800 / im.width)), Image.LANCZOS)
            im.save("ziyan.webp", "WEBP", quality=82, method=6)
        print("ziyan.webp recompressed:", os.path.getsize("ziyan.webp") // 1024, "KB")

if __name__ == "__main__":
    main()
