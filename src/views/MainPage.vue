<template>
  <loading-spinner v-if="isLoading" />
  <div class="container" v-else>
    <div class="flex flex-wrap justify-center gap-x-8 gap-y-4">
      <people-card
        v-for="peopleCard in peopleList"
        :key="peopleCard.Id"
        :peopleCard="peopleCard"
        @click="openCardForEdit(peopleCard.Id)"
      />
    </div>
  </div>
  <DynamicDialog />
  <div v-intersection="loadMorePeople" class="observer"></div>
</template>

<script>
import * as peopleApi from "../api/peopleApi";
import PeopleCard from "../components/peopleCard/PeopleCard.vue";
import LoadingSpinner from "../components/uiComponents/LoadingSpinner.vue";
import EditPersonCard from "../components/editPersonCard/EditPersonCard.vue";

export default {
  components: { LoadingSpinner, PeopleCard },
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

    //open dialog with person info for edit
    openCardForEdit(personId) {
      this.$dialog.open(EditPersonCard, {
        props: {
          header: "Edit Card",
          style: {
            width: "30vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
          modal: true,
        },
        data: {
          personId,
        },
      });
    },
  },
};
</script>
