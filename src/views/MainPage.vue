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
  <div v-intersection="loadPeople" class="observer"></div>
</template>

<script>
import PeopleCard from "../components/peopleCard/PeopleCard.vue";
import LoadingSpinner from "../components/uiComponents/LoadingSpinner.vue";
import EditPersonCard from "../components/editPersonCard/EditPersonCard.vue";
import { mapActions, mapState } from "pinia";
import { usePeopleStore } from "../stores/PeopleStore";

export default {
  components: { LoadingSpinner, PeopleCard },
  name: "MainPage",

  mounted() {
    this.fetchPeople();
  },

  computed: {
    ...mapState(usePeopleStore, ["peopleList", "isLoading", "errorMessage"]),
  },

  methods: {
    ...mapActions(usePeopleStore, ["fetchPeople"]),
    ...mapActions(usePeopleStore, ["loadMorePeople"]),

    loadPeople() {
      this.loadMorePeople();
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

  watch: {
    errorMessage(newMessage) {
      if (newMessage) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: newMessage,
          life: 3000,
        });
      }
    },
  },
};
</script>
