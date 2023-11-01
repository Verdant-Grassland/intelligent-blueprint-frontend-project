<template>
  <div class="top-container">
    <div class="inner">
      <img src="@/assets/image/index-logo.jpg" class="logo" />
      <div class="menu">
        <el-menu :default-active="activeMenu" class="el-menu-demo" mode="horizontal" @select="handleMenuSelect">
          <el-menu-item index="home">首页</el-menu-item>
          <el-submenu index="category">
            <template slot="title">分类</template>
            <el-menu-item index="action1">Action 1</el-menu-item>
            <el-menu-item index="action2">Action 2</el-menu-item>
            <el-menu-item index="action3">Action 3</el-menu-item>
          </el-submenu>
          <el-menu-item index="dynamic">动态</el-menu-item>
          <el-menu-item index="recruitment">志愿者招聘</el-menu-item>
          <el-menu-item index="products">文创产品</el-menu-item>
        </el-menu>
      </div>
      <div class="search">
        <el-input v-model="searchValue" prefix-icon="el-icon-search" size="small" placeholder="搜索" @input="handleSearchInput" />
      </div>
      <div class="person">
        <span @click="goToProfile">个人中心</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchValue = ref('');
const activeMenu = ref('home');

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
