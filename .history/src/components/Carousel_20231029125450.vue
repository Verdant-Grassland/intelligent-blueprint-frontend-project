<template>
  <el-carousel :autoplay="false" height="400px">
    <el-carousel-item type="card" v-for="(item, index) in bannerList" :key="index">
      <div class="carousel" :style="{ 'background': `url(${item.bannerImage}) no-repeat center center / cover` }">
        <div class="bg-color">
          <el-image :src="item.bannerImage" alt="index" style="object-fit: cover;" />
          <div class="text">你的文字内容</div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>  
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

  .carousel {
    //position: relative;
  }
  .bg-color {
    background-color: #8b3841b8;
    position: relative;
  }
  .el-image {
    width: 50%;
    margin: 0px auto;
  
  }
</style>
