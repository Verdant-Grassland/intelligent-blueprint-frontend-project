<script setup lang="ts">
 import Top from "@/components/Top.vue"
 import { ref, watch } from "vue";
import { useRoute } from "vue-router";
 const showTops = ref(true)
 const router = useRoute()
 watch(router, (to, from) => {
  showTops.value = to.name !== "login" && to.name !== "register"
 })
</script>

<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>