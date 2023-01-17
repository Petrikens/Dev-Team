<template>
  <Toast />
  <div class="px-8">
    <header-bar />
    <router-view />
  </div>
</template>

<script>
//layout for home pages
import HeaderBar from "../components/header/HeaderBar.vue";

export default {
  components: { HeaderBar },
};
</script>
