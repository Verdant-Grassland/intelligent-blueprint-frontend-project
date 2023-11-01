<template>
  <footer >
    <el-link :underline="false">{{ item.footName }}</el-link>
  </footer>
</template>

<script lang="ts" setup>
  import axios from '@/util/http'
  import { onMounted, ref } from 'vue';

  const footList = ref()
  function getAllFoot() {
    
    axios.get("/foot/getAllFoot").then(res => {
      footList.value = res.data.footList;
      console.log(res);
    })
  }
  onMounted(() => {
    getAllFoot();
  })
</script>

<style lang="scss" scoped>
</style>