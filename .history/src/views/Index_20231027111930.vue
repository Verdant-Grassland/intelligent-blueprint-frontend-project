<template>
  <el-carousel height="400px">
     <el-carousel-item type="card" v-for="(item,index) in bannerList" :key="index">
      <div class="carousel" :style="{ 'background-image': `url(${item.bannerImage})` }">
        <img :src="item.bannerImage" alt="index" style="max-width: 56%; max-height: 56%;">
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
    .carousel {
      back
    }
  }
</style>
