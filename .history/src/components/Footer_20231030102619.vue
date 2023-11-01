<template>
  <footer v-for="(item, index) in footList" :key="index">
    <el-link :underline="false">{{ item.footName }}</el-link>
  </footer>
</template>

<script lang="ts" setup>
  import axios from '@/util/http'
  import { onMounted } from 'vue';

  function getAllFoot() {
    const
    axios.get("/foot/getAllFoot").then(res => {
      
      console.log(res);
    })
  }
  onMounted(() => {
    getAllFoot();
  })
</script>

<style lang="scss" scoped>
</style>