<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import { mapGetters } from "vuex";

export default {
  beforeMount() {
    this.$store.dispatch(`authModule/fetchUser`, null, { root: true });
  },

  computed: {
    //check which layout to take
    layout() {
      if (this.getUser) {
        return this.$route.meta.layout + "-layout";
      } else {
        return "empty-layout";
      }
    },

    ...mapGetters("authModule", ["getUser"]),
  },

  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style></style>
