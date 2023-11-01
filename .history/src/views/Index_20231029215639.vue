<template>
  <Carousel />
  <div class="index">
    <div class="backts">
      <el-row :gutter="20">
        <el-col :span="16"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="16"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>
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
    .backts {
      width: 100px;
      height: 100px;
      background-color: green;
    }
  }
</style>
