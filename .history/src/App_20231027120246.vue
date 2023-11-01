<script setup lang="ts">
 import Top from "@/components/Top.vue"
 import { onMounted, ref, watch } from "vue";
 import { useRouter } from "vue-router";
 const showTops = ref(true)
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