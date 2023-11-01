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
        <div class="dynamic"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import Carousel from "@/components/Carousel.vue"
</script>

<style lang="scss" scoped>
  .home {
    height: 166%;
    background: url(/src/assets/image/backone.jpg) no-repeat -98px -758px;
    background-size: 1801px;
    .el-row {
      top: 34px;
      margin: 0px !important;
      .el-col {
        margin: 0px 340px;
      }
    }
    .notice, .dynamic {
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 112%;
      height: 274px;
      background-color: #a52a2199;
    }
    .notice {
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 112%;
      height: 274px;
      background-color: #a52a2199;
      
    }
  }
</style>
