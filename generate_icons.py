from PIL import Image, ImageDraw

def create_icon(size, filename):
    img = Image.new('RGB', (size, size), color = (73, 109, 137))
    d = ImageDraw.Draw(img)
    d.text((size/4, size/4), "S", fill=(255, 255, 0))
    img.save(filename)

create_icon(16, 'sports-facility-autofill/images/icon16.png')
create_icon(48, 'sports-facility-autofill/images/icon48.png')
create_icon(128, 'sports-facility-autofill/images/icon128.png')
print("Icons created.")
