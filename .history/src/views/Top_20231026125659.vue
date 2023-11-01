<template>
  <div class="top">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      text-color="black"
      active-text-color="#b27a69"
      router
    >
      <el-menu-item index="0">
        <img
          style="width: 220px"
          src="@/assets/image/index-logo.jpg"
        />
      </el-menu-item>
      <template v-for="(item, index) in navMenuList" :key="index">
        <el-menu-item :index="item.id" v-if="!item.childrennavName">{{ item.navName }}</el-menu-item>
        <el-sub-menu v-if="item.childrennavName" :index="item.id">
          <template #title>{{ item.navName }}</template>
          <el-menu-item v-for="(child, childIndex) in item.childrennavName" :key="childIndex" :index="`${item.id}-${childIndex}`">
            {{ child }}
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { Search } from '@element-plus/icons-vue'
  import { onMounted, ref } from 'vue'
  import axios from '@/util/http'

  const activeIndex = ref('1'); 
  const navMenuList = ref([])
  function getAllNavMenu() {
    axios.get("/navMenu/getAllNavMenu").then((res) => {
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