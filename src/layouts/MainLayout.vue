<template>
  <Toast />
  <div class="main_wrapper">
    <header-bar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
//layout for home pages
import HeaderBar from "../components/header/HeaderBar.vue";

export default {
  components: { HeaderBar },
};
</script>

<style scoped>
.main_wrapper {
  padding: 0px 20px;
}
.content {
  padding: 0px 150px;
}
</style>
