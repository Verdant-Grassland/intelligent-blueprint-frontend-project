<template>
  <Top />
  <el-carousel height="150px">
    <el-carousel-item v-for="(item, index) in bannerList" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
  import Top from "@/components/Top.vue"
  import { onMounted, ref } from 'vue'
  import axios from '@/util/http'

  let bannerList = ref([]); // 使用 ref 创建响应式变量 bannerList

  function getAllBanner() {
    axios.get("/banner/getAllBanners").then((res) => {
      bannerList.value = res.data.banners.bannerImage; // 更新 bannerList 的值
      console.log(res，5);
    })
  }

  onMounted(() => {
    getAllBanner();
  })
</script>

<style lang="scss" scoped>
  
</style>
