<template>
  <div class="header_wrapper">
    <div class="header_logo">LOGO</div>
    <div class="header_search">SEARCH</div>
    <div class="header_avatar">AVATAR</div>
    <Button label="Warning" class="p-button-warning" @click="handleSignOut" />
  </div>
</template>

<script>
export default {
  name: "HeaderBar",

  methods: {
    handleSignOut() {
      this.$store.dispatch(`authModule/logout`, null, { root: true });
    },
  },
};
</script>

<style scoped>
.header_wrapper {
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
}
</style>
