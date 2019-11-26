<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1242"
    height="2208"
    viewBox="0 0 1242 2208"
  >
    <g id="stage-2">
      <g id="p-3">
        <image
          id="kean-3"
          x="154"
          y="257"
          width="434"
          height="897"
          :xlink:href="require('@/assets/chapter-3/kean-3.png')"
        />
        <image
          id="s2-butterfly-3"
          x="114"
          y="101"
          width="125"
          height="134"
          :xlink:href="require('@/assets/chapter-3/s2-butterfly-3.png')"
        />
      </g>
      <g id="p-2">
        <image
          id="kean-2"
          x="558"
          y="201"
          width="617"
          height="1252"
          :xlink:href="require('@/assets/chapter-3/kean-2.png')"
        />
        <image
          id="s2-butterfly-2"
          x="958"
          y="185"
          width="175"
          height="177"
          :xlink:href="require('@/assets/chapter-3/s2-butterfly-2.png')"
        />
      </g>
      <g id="p-1">
        <image
          id="kean-1"
          x="-100"
          y="800"
          width="1500"
          height="1992"
          :xlink:href="require('@/assets/chapter-3/kean-1.png')"
        />
        <image
          id="s2-butterfly-1"
          x="218"
          y="982"
          width="608"
          height="468"
          :xlink:href="require('@/assets/chapter-3/s2-butterfly-1.png')"
        />
      </g>
      <g id="bar">
        <image
          id="s2-bar"
          x="138"
          y="1560"
          width="995"
          height="374"
          :xlink:href="require('@/assets/chapter-3/s2-bar.png')"
        />
        <image
          id="s2-butterfly-sign"
          x="246"
          y="1790"
          width="179"
          height="150"
          :xlink:href="require('@/assets/chapter-3/s2-butterfly-sign.png')"
        />
      </g>
    </g>
  </svg>
</template>


<script>
export default {
  data() {
    return {
      stage: 1
    }
  }
}
</script>

<style lang="scss" scoped>
#p-2,
#p-1 {
  opacity: 0;
}
</style>