<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "./stores/AuthStore";

export default {
  beforeMount() {
    this.fetchUser();
  },

  computed: {
    //check which layout to take
    layout() {
      if (this.userInfo) {
        return this.$route.meta.layout + "-layout";
      } else {
        return "empty-layout";
      }
    },

    ...mapState(useAuthStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(useAuthStore, ["fetchUser"]),
  },

  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>
