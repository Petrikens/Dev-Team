<template>
  <div class="header_wrapper">
    <div class="header_logo">
      <img src="../../assets/img/logo.png" alt="logo" />
    </div>
    <InputText type="text" placeholder="Search by name" />
    <Avatar
      icon="pi pi-user"
      class="mr-2"
      size="large"
      style="background-color: #2196f3; color: #ffffff"
      @click="toggle"
    />
    <OverlayPanel ref="op" id="overlay_panel">
      <Button label="Logout" class="p-button-warning" @click="handleSignOut" />
    </OverlayPanel>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",

  methods: {
    handleSignOut() {
      this.$store.dispatch(`authModule/logout`, null, { root: true });
    },

    toggle(event) {
      this.$refs.op.toggle(event);
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

.p-avatar {
  cursor: pointer;
}

.header_logo {
  width: 60px;
  height: 50px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
