<template>
  <footer v-for="(item, index) in footList" :key="index">
    <el-link :underline="false">{{ item.footName }}</el-link>
  </footer>
</template>

<script lang="ts" setup>
  
</script>

<style lang="scss" scoped>
</style>