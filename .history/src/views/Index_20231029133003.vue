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
    <!-- width: 100%; -->
    min-height: 131%;
    background-image  : url("@/assets/image/back.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-size : auto auto; //双auto可以保证纹理图不会被拉伸和缩放
    background-attachment: scroll;
    background-repeat: repeat;

  }
</style>
