<template>
  <Carousel />
  <div class="home">
    <el-row :gutter="20">
      <el-col :offset="6" :span="12">
        <div class="notice">
          <div>
            <p>天坛<span>Temple of Heaven</span></p>
            <el-image src="/src/assets/image/1.png" fit="fill" :lazy="true" />
          </div>
          <p>竞标公告<br/>占位</p>
        </div>
        <div class=""></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import Carousel from "@/components/Carousel.vue"
</script>

<style lang="scss" scoped>
  .home {
    /*height: 250%;
    background: url(/src/assets/image/back.jpg) no-repeat 0px -486px;
    background-size: 100% 100%;*/
    /*width: 1533px;
    height: 1202px;
    background: url(/src/assets/image/backone.jpg) no-repeat -98px -750px;
    background-size: 1800px 1948px;
    .el-row {
      top: 34px;
      margin: 0px !important;
      .el-col {
        margin: 0px 340px;
      }
    }
    .notice {
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 112%;
      height: 274px;
      background-color: #a52a2199;
      p {
        margin: 0px;
        padding: 0.5rem 2.4rem 6px;
        color: white;
        font-size: 32px;
        font-family: Microsoft JhengHei UI Light;
        span {
          font-size: 20px;
          margin-left: 2px;
        }
      }
      .el-image {
        width: 58%;
        margin: 0px 34px;
      }
    }
  }
</style>
