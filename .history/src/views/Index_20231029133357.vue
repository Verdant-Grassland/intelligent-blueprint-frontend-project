<template>
  <Carousel />
  <div class="index">
    
  </div>
</template>

<script setup lang="ts">
  import Carousel from "@/components/Carousel.vue"
</script>

<style lang="scss" scoped>
  .index {
    height: 100vh;
    background-image  : url("@/assets/image/back.jpg") center center;
    background-size : 100%; //双auto可以保证纹理图不会被拉伸和缩放
    background-attachment: scroll;
    background-repeat: no-repeat;

  }
</style>
