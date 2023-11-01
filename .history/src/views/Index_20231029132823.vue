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
    width: 100%;
    min-height: 131%;
    background-image  : url("@/assets/image/back.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
