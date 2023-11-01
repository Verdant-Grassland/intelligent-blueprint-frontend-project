<script setup lang="ts">
 import Top from "@/components/Top.vue"
 import { ref } from "vue";
  import { useRouter } from "vue-router";
 const showTops = ref(true)
 const router = useRouter();
 watch(
  () => router.currentRoute.value.path,
  (newPath, oldPath) => {
    // 在路由变化时更新showTops的值
    showTops.value = !(newPath === "/login" || newPath === "/register");
  }
);

// 你可以在需要的时候调用onMounted来初始化showTops的值
onMounted(() => {
  showTops.value = !(router.currentRoute.value.path === "/login" || router.currentRoute.value.path === "/register");
});
</script>

<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>