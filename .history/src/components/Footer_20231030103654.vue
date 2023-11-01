<template>
  <footer>
    <el-row type="flex" justify="center" style="border:1px solid #333;width:300px;height:102px">
      <el-col :span="12">
        <el-link v-for="(item, index) in footList" :key="index" :underline="false">{{ item.footName }}</el-link>
      </el-col>
    </el-row>
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
  footer {
    position: relative;
    top: -50px;
  }
</style>