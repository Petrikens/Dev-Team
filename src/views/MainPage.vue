<template>
  <loading-spinner v-if="isLoading" />
  <div class="container" v-else>
    <div class="people_list">
      <people-list :peopleList="peopleList" />
    </div>
  </div>
  <div v-intersection="loadMorePeople" class="observer"></div>
</template>

<script>
import * as peopleApi from "../api/peopleApi";
import PeopleList from "../components/peopleList/PeopleList.vue";
import LoadingSpinner from "../components/uiComponents/LoadingSpinner.vue";

export default {
  components: { LoadingSpinner, PeopleList },
  name: "MainPage",

  data() {
    return {
      peopleList: [],
      isLoading: true,
      page: 1,
      perPage: 8,
    };
  },

  mounted() {
    this.fetchPeople();
  },

  methods: {
    //function for fetching people list
    async fetchPeople() {
      try {
        const data = {
          params: {
            pp: this.perPage,
            p: this.page,
          },
        };

        const response = await peopleApi.fetchPeopleList(data);

        this.peopleList = await response.data;

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
    //load more people when scroll the page
    async loadMorePeople() {
      try {
        this.page += 1;
        const data = {
          params: {
            pp: this.perPage,
            p: this.page,
          },
        };

        const response = await peopleApi.fetchPeopleList(data);

        this.peopleList = [...this.peopleList, ...response.data];

        this.isLoading = false;
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: error,
          life: 3000,
        });

        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.people_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 70px;
  row-gap: 40px;
}
</style>
