<template>
  <Top />
  <el-carousel height="150px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
  import Top from "@/components/Top.vue"
  import { onMounted, ref } from 'vue'
  import axios from '@/util/http'

  function getAllBanner() {
    axios.get("/banner/getAllBanners").then((res) => {
      console.log(res);
    })
  }
   onMounted(() => {
    getAllBanner();
   })
</script>

<style lang="scss" scoped>
  
</style>
