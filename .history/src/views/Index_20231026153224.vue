<template>
  <Top />
  <el-carousel height="400px">
    <el-carousel-item v-for="(item,index) in bannerList" :key="item">
      <img :src="item" alt="index">
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
  import Top from "@/components/Top.vue"
  import { onMounted, ref } from 'vue'
  import axios from '@/util/http'

  const bannerList = ref<string[]>([])
  function getAllBanner() {
    axios.get("/banner/getAllBanners").then((res) => {
      bannerList.value = res.data.banners[0].bannerImage; // 更新 bannerList 的值  上面的是 index声明了,没用到 TS的检测报错
      console.log(res);
    })
  }

  onMounted(() => {
    getAllBanner();
  })
</script>

<style lang="scss" scoped>
  
</style>
