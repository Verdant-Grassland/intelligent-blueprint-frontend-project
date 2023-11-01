<template>
  <footer v-for="(item, index) in footList" :key="index">
    <el-link :underline="false">{{ item.footName }}</el-link>
  </footer>
</template>

<script lang="ts" setup>
  import axios from '@/util/http'

  function getAll
</script>

<style lang="scss" scoped>
</style>