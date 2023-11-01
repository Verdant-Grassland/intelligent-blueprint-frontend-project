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

  const bannerList = ref<string[]>([])
  function getAllBanner() {
    axios.get("/banner/getAllBanners").then((res) => {
      bannerList.value = res.data.banners;
      console.log(res);
    })
  }

  onMounted(() => {
    getAllBanner();
  })
</script>@青青草原ه٥你这banners是个数组 遍历在push

<style lang="scss" scoped>
  
</style>
