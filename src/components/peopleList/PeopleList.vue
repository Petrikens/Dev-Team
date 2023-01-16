<template>
  <div
    class="people_card"
    v-for="peopleCard in peopleList"
    :key="peopleCard.Id"
  >
    <PeopleCard
      :peopleCard="peopleCard"
      @click="openCardForEdit(peopleCard.Id)"
    />
  </div>
  <DynamicDialog />
</template>

<script>
import PeopleCard from "../peopleCard/PeopleCard.vue";
import EditPersonCard from "../editPersonCard/EditPersonCard.vue";

export default {
  components: { PeopleCard },
  name: "PeopleList",

  props: {
    peopleList: {
      type: Array,
    },
  },

  methods: {
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

<style scoped></style>
