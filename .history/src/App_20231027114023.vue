<script setup lang="ts">
 import Top from "@/components/Top.vue"
import { ref } from "vue";
 const showTops = ref(true)
 showTops.value = 
</script>

<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>