<template>
  <div class="flex justify-between py-10">
    <div class="w-14 h-14">
      <img
        src="../../assets/img/logo.png"
        alt="logo"
        class="w-full h-full object-cover"
      />
    </div>
    <InputText type="text" placeholder="Search by name" />
    <Avatar
      class="cursor-pointer mr-2"
      icon="pi pi-user"
      size="large"
      style="background-color: #2196f3; color: #ffffff"
      @click="toggle"
    />
    <OverlayPanel ref="op" id="overlay_panel">
      <Button label="Logout" class="p-button-warning" @click="logout()" />
    </OverlayPanel>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAuthStore } from "../../stores/AuthStore";

export default {
  name: "HeaderBar",

  methods: {
    ...mapActions(useAuthStore, ["logout"]),

    toggle(event) {
      this.$refs.op.toggle(event);
    },
  },
};
</script>
