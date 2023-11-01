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

  const activeIndex = ref('1'); 
  const navMenuList = ref([])
  function getAllNavMenu() {
    axios.get("").then((res) => {
      console.log(res);
      navMenuList.value = res.data.navMenuList;
    })
  }
   onMounted(() => {
    getAllNavMenu();
   })
</script>

<style lang="scss" scoped>
  
</style>
