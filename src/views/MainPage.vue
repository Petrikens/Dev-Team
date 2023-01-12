<template>
  <loading-spinner v-if="isLoading" />
  <div class="container" v-else>
    <div class="people_list">
      <people-list :peopleList="peopleList" />
    </div>
  </div>
  <div ref="observer" class="observer"></div>
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

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    let callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.loadMorePeople();
      }
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(this.$refs.observer);
  },

  methods: {
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
          summary: "Ошибка",
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
  flex-direction: row;
  justify-content: space-around;
}
</style>
