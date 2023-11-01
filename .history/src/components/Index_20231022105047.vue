<template>
  <!-- <div class="top_container">
    <div class="inner">
      <img src="@/assets/image/index-logo.jpg" />
      <div class="text">
        <ul>
          <li>首页</li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">
                分类
                <el-icon class="el-icon--right">
                  <i class="el-icon-arrow-down"></i>
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li>动态</li>
          <li>志愿者招聘</li>
          <li>文创产品</li>
        </ul>
      </div>
      <div class="search">
        <el-input v-model="searchValue" :prefix-icon="Search" size="small"></el-input>
      </div>
      <div class="person">
        <span>个人中心</span>
      </div>
    </div>
  </div> -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0">
      <img
        style="width: 220px"
        src="@/assets/image/index-logo.jpg"
      />
    </el-menu-item>
    <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>分类</template>
      <el-menu-item index="2-1">Action 1</el-menu-item>
      <el-menu-item index="2-2">Action 2</el-menu-item>
      <el-menu-item index="2-3">Action 3</el-menu-item>
      <el-menu-item index="2-4">Action 4</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
  import { Search } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  const activeIndex = ref(1)

</script>

<style lang="scss" l>
.el-menu {
  border-bottom: none !important;
}
.el-menu-item.is-active {
  border-bottom: none !important;
}
  .top_container {
    width: 100%;
    background: white;

    .inner {
      /*width: 47%;
      height: 40px;*/
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 220px;
      }
      .text {
        ul {
          display: flex;
          font-size: 16px;
          white-space: nowrap;
          list-style: none;
          li {
            margin: 0 10px;
            color: black;
            cursor: pointer;
            :deep(.el-dropdown) {
              font-size: 16px;
              color: black;
            }
            .el-icon--right {
              margin-left: 0;
            }
          }
        }
      }

      .search {
        border: 1px solid #7b1e17;
        border-radius: 50px;
        margin: 0 10px;
        padding: 4px 4px 4px 5px;
        :deep(.el-input__wrapper) {
          border-radius: 50px;
          box-shadow: 0 0 0 1px #7F7E7B;
        }
      }
      .person {
        cursor: pointer;
      }
    }
  }
</style>
