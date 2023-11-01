<script setup lang="ts">
 import Top from "@/components/Top.vue"
 import { ref } from "vue";
 const showTops = ref(true)
 watch: {
  this.$u.route()
 }
</script>

<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>