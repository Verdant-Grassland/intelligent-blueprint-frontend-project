<template>
  <Carousel />
  <div class="home">
    <el-row :gutter="20">
      <el-col :offset="6" :span="12">
        <div class="notice">
          <div>
            <p>天坛<span>Temple of Heaven</span></p>
            <el-image src="http://192.168.188.128:8888/group1/M00/00/07/wKi8gGU9AiKAdskoAAMpHbQOboY156.jpg" fit="fill" :lazy="true" />
          </div>
          <p>竞标公告<>位</p>
        </div>
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import Carousel from "@/components/Carousel.vue"
</script>

<style lang="scss" scoped>
  .home {
    height: 230%;
    background  : url("@/assets/image/back.jpg");
    background-size : 100% 100%; //双auto可以保证纹理图不会被拉伸和缩放
    background-repeat: no-repeat;
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
      background-color: #7b1e1780;
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
