<template>
  <div class="top-container">
    <div class="inner">
      <img src="@/assets/image/index-logo.jpg" class="logo" />
      <el-menu :default-active="activeMenuItem" mode="horizontal" background-color="#fff">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">分类 <i class="el-icon-arrow-down"></i></template>
          <el-menu-item index="2-1">Action 1</el-menu-item>
          <el-menu-item index="2-2">Action 2</el-menu-item>
          <el-menu-item index="2-3">Action 3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">动态</el-menu-item>
        <el-menu-item index="4">志愿者招聘</el-menu-item>
        <el-menu-item index="5">文创产品</el-menu-item>
      </el-menu>
      <div class="search">
        <el-input v-model="searchValue" placeholder="搜索" size="mini" clearable prefix-icon="el-icon-search"></el-input>
      </div>
      <div class="person">
        <span>个人中心</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchValue = ref('');
const activeMenuItem = ref('1'); 

const handleMenuSelect = (index) => {
  activeMenu.value = index;
};

const handleSearchInput = () => {
  // 处理搜索输入
};

const goToProfile = () => {
  // 跳转到个人中心
};
</script>

<style scoped>
.top-container {
  background-color: white;
  padding: 10px 0;
}

.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 220px;
  }

  .menu {
    .el-menu-demo {
      border: none;
    }
  }

  .search {
    border: 1px solid #7b1e17;
    border-radius: 50px;
    padding: 4px 4px 4px 5px;
    box-shadow: 0 0 0 1px #7F7E7B;
  }

  .person {
    cursor: pointer;
  }
}
</style>
