<template>
  <Top />
  <div
      class="background-image"
      :style="{ 'background-image': `url(${item.bannerImage})` }"
      v-for="(item, index) in bannerList"
      :key="index"
    ></div>
  <el-carousel height="400px">
     <el-carousel-item v-for="(item,index) in bannerList" :key="index">
      <img :src="item.bannerImage" alt="index" style="max-width: 100%; max-height: 100%;">
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
  import Top from "@/components/Top.vue"
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
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }  
</style>
