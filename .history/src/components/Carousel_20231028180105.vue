<template>
  <div class="bg-color">
    <el-carousel :autoplay="false" height="400px">
      <el-carousel-item type="card" v-for="(item, index) in bannerList" :key="index">
        <div class="carousel">
          <!-- 背景颜色 -->
          <div class="background-color"></div>
          
          <!-- 背景图片 -->
          <div class="background-image" :style="{ 'background': `url(${item.bannerImage}) no-repeat center center / cover` }"></div>
  
          <!-- 图片元素 -->
          <el-image :src="item.bannerImage" alt="index" style="max-width: 80%; max-height: 80%" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  
</template>

<script setup lang="ts">
 
  import { onMounted, ref } from 'vue'
  import axios from '@/util/http'

  const bannerList = ref<{bannerImage: string}[]>([])
  function getAllBanner() {
    axios.get("/banner/getAllBanners").then((res) => {
      bannerList.value = res.data.banners;
      console.log(res);
    })
  }

  onMounted(() => {
    getAllBanner();
  })
</script>

<style lang="scss" scoped>
  .el-carousel {
    text-align: center;
  }
  .bg-color {
    background-color: green;
  }
</style>
