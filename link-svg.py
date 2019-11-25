import re
import sys

xlink_re = re.compile('image id="(.+?)"[\s\S]+?(xlink:href=".+?)"')
file_name = sys.argv[1]
print(file_name)


def replace_link(match):
    _txt = match.group(0)
    _id = match.group(1)
    _link = match.group(2)
    return _txt.replace(_link, f":xlink:href=\"require('@/assets/chapter/{_id}.png')")


with open(file_name, 'r') as f:
    i = f.read()
    o = re.sub(xlink_re, replace_link, i)
    print(o)

raw_name = file_name.split('/')[-1].replace('assets', '').replace('.', '-')
out_file_name = f"components/{raw_name}-tmp.vue"
print(out_file_name)
with open(f"components/{raw_name}-tmp.vue", 'w') as f:
    f.write(f"""<template>
{o}
</template>""")
