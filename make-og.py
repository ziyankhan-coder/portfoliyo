#!/usr/bin/env python3
"""Build og.png (1200x630): black card with name, role and photo.

    pip install pillow
    python tools/make-og.py            # uses ziyan.webp if present

Run it from the project root. Without ziyan.webp it makes a text-only card.
"""
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
ACCENT = (59, 130, 246)

def font(candidates, size):
    for p in candidates:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

BOLD = ["/usr/share/fonts/opentype/inter/Inter-Bold.otf", "C:/Windows/Fonts/arialbd.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"]
REG = ["/usr/share/fonts/opentype/inter/Inter-Regular.otf", "C:/Windows/Fonts/arial.ttf",
       "/System/Library/Fonts/Supplemental/Arial.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]
MONO = ["/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", "C:/Windows/Fonts/consola.ttf",
        "/System/Library/Fonts/Menlo.ttc"]

img = Image.new("RGB", (W, H), (0, 0, 0))

# faint grid, fading toward the edges
grid = Image.new("RGB", (W, H), (0, 0, 0))
gd = ImageDraw.Draw(grid)
for x in range(0, W, 44):
    gd.line([(x, 0), (x, H)], fill=(255, 255, 255))
for y in range(0, H, 44):
    gd.line([(0, y), (W, y)], fill=(255, 255, 255))
mask = Image.new("L", (W, H), 0)
ImageDraw.Draw(mask).ellipse([100, -150, W - 100, H + 150], fill=40)
mask = mask.filter(ImageFilter.GaussianBlur(120))
img.paste(grid, (0, 0), mask)

# accent glow behind the photo
glow = Image.new("RGB", (W, H), (0, 0, 0))
ImageDraw.Draw(glow).ellipse([760, 80, 1120, 440], fill=ACCENT)
glow = glow.filter(ImageFilter.GaussianBlur(90))
img = Image.blend(img, Image.composite(glow, img, glow.convert("L")), 0.55)

d = ImageDraw.Draw(img)
d.text((72, 190), "Ziyan Khan", font=font(BOLD, 96), fill=(255, 255, 255))
d.text((72, 316), "Python Django & WordPress Developer", font=font(REG, 36), fill=ACCENT)
d.text((72, 384), "Final-year B.Tech CSE (AI/ML) • Bhopal • Indore", font=font(REG, 26), fill=(161, 161, 170))
d.text((72, 548), "portfoliyo-olive.vercel.app", font=font(MONO, 22), fill=(161, 161, 170))

# photo in a circular accent ring
cx, cy, r = 940, 260, 170
ring = Image.new("RGB", (2 * r + 12, 2 * r + 12), ACCENT)
rm = Image.new("L", ring.size, 0)
ImageDraw.Draw(rm).ellipse([0, 0, ring.width - 1, ring.height - 1], fill=255)
img.paste(ring, (cx - r - 6, cy - r - 6), rm)

if os.path.exists("ziyan.webp"):
    ph = Image.open("ziyan.webp").convert("RGB")
    side = min(ph.size)
    ph = ph.crop(((ph.width - side) // 2, 0, (ph.width + side) // 2, side)).resize((2 * r, 2 * r), Image.LANCZOS)
    pm = Image.new("L", ph.size, 0)
    ImageDraw.Draw(pm).ellipse([0, 0, ph.width - 1, ph.height - 1], fill=255)
    img.paste(ph, (cx - r, cy - r), pm)
    print("Photo added from ziyan.webp")
else:
    inner = Image.new("RGB", (2 * r, 2 * r), (17, 17, 17))
    pm = Image.new("L", inner.size, 0)
    ImageDraw.Draw(pm).ellipse([0, 0, inner.width - 1, inner.height - 1], fill=255)
    img.paste(inner, (cx - r, cy - r), pm)
    print("ziyan.webp not found: made a text-only card. Re-run next to ziyan.webp to add the photo.")

img.save("og.png", optimize=True)
print("og.png", os.path.getsize("og.png") // 1024, "KB")
