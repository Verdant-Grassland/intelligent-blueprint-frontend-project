<template>
  <Carousel />
  <div class="home">
    <el-row :gutter="20" style="border:1px solid #333;width:300px;height:102px">
      <el-col :offset="6" :span="12">
        <div style="background:red;height:100px"></div>
        <div style="background:red;height:100px"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import Carousel from "@/components/Carousel.vue"
</script>

<style lang="scss" scoped>
  .home {
    height: 230%;
    background  : url("@/assets/image/back.jpg");
    background-size : 100% 100%; //双auto可以保证纹理图不会被拉伸和缩放
    background-repeat: no-repeat;
    .tina {
      padding: 32px 15px;
      margin: 0px 45.6%;
      .backts {
        width: 100px;
        height: 100px;
        background-color: green;
      }
    }
  }
</style>
