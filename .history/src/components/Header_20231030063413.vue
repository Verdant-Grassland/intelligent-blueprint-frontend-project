<template>
  <div class="top">
    
  </div>
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
  .el-menu {
    margin: 15px;
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