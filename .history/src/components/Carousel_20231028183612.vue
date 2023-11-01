<template>
  <div class="bg-color"></div>
    <el-carousel :autoplay="false" height="400px">
      <el-carousel-item type="card" v-for="(item, index) in bannerList" :key="index">
        <div class="carousel"><el-image fit="cover" :src="item.bannerImage" alt="index" /></div>
          
       
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
      console.log(123)
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
  .carousel{
    width:900px;
    background-size:100%;
  }
</style>
