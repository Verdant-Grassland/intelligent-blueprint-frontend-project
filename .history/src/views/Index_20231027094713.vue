<template>
  <Top />
  <div
      class="background-image"
      
      v-for="(item, index) in bannerList"
      :key="index"
    ></div>
  <el-carousel height="400px">
     <el-carousel-item v-for="(item,index) in bannerList" :key="index">
      <div class="carousel" :style="{ 'background-image': `url(${item.backgroundImage})` }">
        <img :src="item.bannerImage" alt="index" style="max-width: 100%; max-height: 100%;">
      </div>
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
</style>
