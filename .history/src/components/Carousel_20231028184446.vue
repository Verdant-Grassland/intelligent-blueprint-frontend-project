<template>
  <div class="bg-color"></div>
    <el-carousel :autoplay="false" height="400px">
      <el-carousel-item type="card" v-for="(item, index) in bannerList" :key="index">
        <div class="imgbox">
          <div class="imgflex">
            <div class="carousel">
              <el-image fit="cover" :src="item.bannerImage" alt="index" />
            </div>
            <div class="carousel2">
              <el-image fit="cover" :src="item.bannerImage" alt="index" />
            </div>
            <div class="carousel3">
              <h5>故宫的故事</h5>
            </div>
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
  .imgbox{
    .imgflex{
      position: relative;
      .carousel{
        position: absolute;
        filter: grayscale(100%) sepia(100%) hue-rotate(0deg) saturate(5000%) brightness(100%) contrast(100%);
      }
      .carousel2{
        width: 525px;
        top: 105px;
        left: 95px;
        position: absolute;
      }
      .carousel3{
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
  }
  .bg-color {
    background-color: green;
  }
  .carousel{
    width:900px;
    background-size:100%;
  }
</style>
