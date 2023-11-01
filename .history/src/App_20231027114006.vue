<script setup lang="ts">
 import Top from "@/components/Top.vue"
 const showTops = ref(true)
 
</script>

<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>