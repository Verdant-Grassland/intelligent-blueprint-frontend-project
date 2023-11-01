<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      text-color="black"
      active-text-color="#b27a69"
      router
    >
      <el-menu-item index="/home">
        <img
          style="width: 220px"
          src="@/assets/image/index-logo.jpg"
        />
      </el-menu-item>
      <template v-for="(item, index) in navMenuList" :key="index">
        <el-menu-item :index="item.navPath" v-if="!item.childrennavName && item.navName !== '个人中心'">{{ item.navName }}</el-menu-item>
        <el-sub-menu v-if="item.childrennavName" :index="item.id">
          <template #title>{{ item.navName }}</template>
          <el-menu-item v-for="(child, childIndex) in item.childrennavName" :key="childIndex" :index="`${item.id}-${childIndex}`">
            {{ child }}
          </el-menu-item>
        </el-sub-menu>
      </template>
      <div class="search" v-if="showSearch">
        <el-input :prefix-icon="Search" size="small"></el-input>
      </div>
      <el-menu-item v-if="personCenter && personCenter.navName">{{ personCenter.navName }}</el-menu-item>
    </el-menu>
  </header>
</template>

<script setup lang="ts">
  import { Search } from '@element-plus/icons-vue'
  import { onMounted, ref } from 'vue'
  import axios from '@/util/http'

  const activeIndex = ref('1'); 
  const navMenuList = ref([])
  const personCenter = ref()
  function getAllNavMenu() {
    axios.get("/navMenu/getAllNavMenu").then((res) => {
      console.log(res);
      navMenuList.value = res.data.navMenuList;
      personCenter.value = res.data.navMenuList[5]
    })
  }
   onMounted(() => {
    getAllNavMenu();
   })
   const showSearch = ref(true);
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 80px;
  }
  .el-menu {
    margin: 13px;
    display: flex;
    justify-content: center;
  }
  .el-menu--horizontal {
    align-items: center;
  }
  .el-menu, .el-menu-item.is-active {
    border: none !important;
    
  }
  .el-menu--horizontal>.el-menu-item {
    height: 56px !important;
    border-bottom: none;
  }
  .el-menu-item.is-active , .el-menu-item:hover, .el-menu-item:not(.is-disabled):focus {
    background-color: transparent !important;
  }
  .search {
    border: 2px solid #7b1e17;
    border-radius: 50px;
    margin: 0 10px;
    padding: 4px 4px 4px 5px;
    :deep(.el-input__wrapper) {
      border-radius: 50px;
      box-shadow: 0 0 0 1px #7F7E7B;
    }
  }
</style>