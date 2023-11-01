<script setup lang="ts">
 import Top from "@/components/Top.vue"
 import { useRouter } from "vue-router";
 const router = useRouter();
 // 使用computed来动态计算showTops
const showTops = computed(() => {
  const path = router.currentRoute.value.path;
  return !(path === "/login" || path === "/register");
});
</script>

<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>