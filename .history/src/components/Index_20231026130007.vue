<template>

</template>

<script setup lang="ts">

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
