<script setup lang="ts">
 import Top from "@/components/Top.vue"
 const showTops = ref(this.$forceUpdate();
</script>

<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>