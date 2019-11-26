import re
import sys

xlink_re = re.compile('image id="(.+?)"[\s\S]+?(xlink:href=".+?)"')
file_name = sys.argv[1]
print(file_name)

_ids = []


def replace_link(match):
    _txt = match.group(0)
    _id = match.group(1)
    global _ids
    _ids.append(_id)
    _link = match.group(2)
    return _txt.replace(_link, f":xlink:href=\"require('@/assets/chapter-6/{_id}.png')")


with open(file_name, 'r') as f:
    i = f.read()
    o = re.sub(xlink_re, replace_link, i)
    print(o)

raw_name = file_name.split('/')[-1].replace('assets', '').replace('.', '-')
out_file_name = f"components/chapter-{raw_name}.vue"
print(out_file_name)
with open(out_file_name, 'w') as f:
    f.write("""<template>
""" + o+"""
</template>



<script>
import { gsap, Back, Linear } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'

export default {
  mounted() {
    setTimeout(() => {
     gsap
      .timeline({ delay: 0 })
      .fromTo('#s2-head', appear.time, fadeIn.from, fadeIn.to)
      .fromTo('#s2-body', appear.time, fadeIn.from, fadeIn.to)
      .fromTo('#s2-pearl', appear.time, fadeIn.from, fadeIn.to)

      .to('#s2-surprise', 0.2, {
        opacity: 1,
        rotate: 10,
        transformOrigin: 'center center'
      })
    }, 1500)
  }
}
</script>


<style lang="scss" scoped>
""" + ",".join([f'#{__id}'for __id in _ids]) + """ {
  opacity: 0;
}
</style>

""")
