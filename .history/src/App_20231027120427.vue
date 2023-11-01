<script setup lang="ts">
import Top from "@/components/Top.vue";
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showTops = ref(true);

onMounted(() => {
  showTops.value = !(router.currentRoute.value.path === "/login" || router.currentRoute.value.path === "/register");
});

// 监听路由变化，确保在路由变化时更新showTops
watch(
  () => router.currentRoute.value.path,
  (newPath, oldPath) => {
    showTops.value = !(newPath === "/login" || newPath === "/register");
  }
);
</script>


<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>