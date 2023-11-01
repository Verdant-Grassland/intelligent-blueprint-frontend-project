<template>
  <Carousel />
  <div class="index">
    <div class="tina">
      <div class="backts">
      
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Carousel from "@/components/Carousel.vue"
</script>

<style lang="scss" scoped>
  .index {
    height: 230%;
    background  : url("@/assets/image/back.jpg");
    background-size : 100% 100%; //双auto可以保证纹理图不会被拉伸和缩放
    background-repeat: no-repeat;
    .tina {
      padding: 15px;
      margin: 0px 45.6%;
      .backts {
        width: 100px;
        height: 100px;
        background-color: green;
      }
    }
  }
</style>
