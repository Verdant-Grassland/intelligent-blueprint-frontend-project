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
.top {
  padding: 12px;
}
.el-menu {
  margin: 15px;
  display: flex;
  justify-content: center;
}
.el-menu--horizontal {
  align-items: center;
}
.el-menu, .el-menu-item.is-active {
  border-bottom: none !important;
}
.el-menu--horizontal>.el-menu-item {
  height: 56px !important;
}
.el-menu-item.is-active {
  background-color: white !important;
}
.el-menu-item:hover {
  background-color: white !important;
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
