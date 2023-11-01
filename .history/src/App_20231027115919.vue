<script setup lang="ts">
 import Top from "@/components/Top.vue"
 import { ref } from "vue";
import { useRouter } from "vue-router";
 const showTops = ref(true)
 const router = useRouter();
 watch: {
  router : function(res) {
    this.showTops = res.path !== ""
  }
 }
</script>

<template>
  <Top v-if="showTops" />
  <router-view></router-view>
</template>

<style lang="scss">

</style>