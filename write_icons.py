import base64
import os

# 1x1 Red Pixel
base64_png = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
png_data = base64.b64decode(base64_png)

files = [
    'sports-facility-autofill/images/icon16.png',
    'sports-facility-autofill/images/icon48.png',
    'sports-facility-autofill/images/icon128.png'
]

for f in files:
    with open(f, 'wb') as file:
        file.write(png_data)
    print(f"Wrote {f}")
