Run this while in development

npx tailwindcss -i ./input.css -0 ./dist/output.css --watch

Image resize script

from PIL import Image, ImageOps

desired_size = 9953
im_pth = "/Users/jakecunningham/Documents/UCL/Papers/ActuallySparseVariationalGPs/fig_poster1.png"

im = Image.open(im_pth)
old_size = im.size # old_size[0] is in (width, height) format

ratio = float(desired_size)/max(old_size)
new_size = tuple([int(x*ratio) for x in old_size])

# use thumbnail() or resize() method to resize the input image

# thumbnail is a in-place operation

# im.thumbnail(new_size, Image.ANTIALIAS)

im = im.resize(new_size, Image.ANTIALIAS)

# create a new image and paste the resized on it

new_im = Image.new("RGB", (9953, 4952), color="white")
new_im.paste(im, ((9953-new_size[0])//2,
(4952-new_size[1])//2))

new_im.save('ASVGP_resized.png')
