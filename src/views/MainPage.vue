<template>
  <loading-spinner v-if="isLoading" />
  <div class="container" v-else>
    <h1>HOME</h1>
  </div>
</template>

<script>
import * as peopleApi from "../api/peopleApi";
import LoadingSpinner from "../components/uiComponents/LoadingSpinner.vue";

export default {
  components: { LoadingSpinner },
  name: "MainPage",

  data() {
    return {
      peopleList: [],
      isLoading: true,
    };
  },

  async mounted() {
    try {
      const response = await peopleApi.fetchPeopleList();

      this.peopleList = await response.data;

      console.log(this.peopleList);

      this.isLoading = false;
    } catch (error) {
      this.$toast.add({
        severity: "error",
        summary: "Ошибка",
        detail: error,
        life: 3000,
      });

      this.isLoading = false;
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
