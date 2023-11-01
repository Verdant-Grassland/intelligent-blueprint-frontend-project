<template>
  <el-carousel height="400px">
     <el-carousel-item type="card" v-for="(item,index) in bannerList" :key="index">
      <div class="carousel-color">
        <div class="carousel" :style="{ 'background-image': `url(${item.bannerImage})` }">
          <el-image :src="item.bannerImage" alt="index" style="width: 100%; height: 100%" />
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
  .carousel-color {
    background-color: green;
    width: 100%;
    height: 100%;
  }
</style>
