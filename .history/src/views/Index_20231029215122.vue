<template>
  <Carousel />
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
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
  }
</style>
