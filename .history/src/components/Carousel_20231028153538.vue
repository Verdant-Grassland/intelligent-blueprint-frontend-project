<template>
  <div style="position: relative;">
    <div class="bg-color"></div>
    <div style="position: absolute;top:0;left:0; background:transparent;opactiy:(0.5);">
      <el-carousel :autoplay="false" height="400px">
        <el-carousel-item type="card" v-for="(item, index) in bannerList" :key="index">
          <div class="carousel" :style="{ 'background': `url(${item.bannerImage}) no-repeat center center / cover` }">
            <el-image :src="item.bannerImage" alt="index" style="max-width: 80%; max-height: 80%" />
          </div>
        </el-carousel-item>
      </el-carousel>  
    </div>
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
