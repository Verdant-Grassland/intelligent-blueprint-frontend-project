<template>
  <Top />
  <el-carousel height="400px">
    <el-carousel-item v-for="(item,_) in bannerList" :key="item">
      <img :src="item" alt="">
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
      bannerList.value = res.data.banners[0].bannerImage; // 更新 bannerList 的值
      console.log(res);
    })
  }

  onMounted(() => {
    getAllBanner();
  })
</script>

<style lang="scss" scoped>
  
</style>
