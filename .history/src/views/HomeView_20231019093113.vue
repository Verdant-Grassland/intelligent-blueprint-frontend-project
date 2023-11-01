<template>
  <div class="home">
    <Login></Login>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '.';

export default defineComponent({
  name: 'HomeView',
  components: {
    Login
  },
});
</script>
