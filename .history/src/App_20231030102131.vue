<script setup lang="ts">
 import Header from "@/components/Header.vue"
 import Footer from "@/components/Footer.vue"
import { computed } from "vue";
 import { useRouter } from "vue-router";
 const router = useRouter();
 // 使用computed来动态计算showTops
const showTops = computed(() => {
  const path = router.currentRoute.value.path;
  return !(path === "/login" || path === "/register");
});
</script>

<template>
  <Header v-if="showTops" />
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">

</style>