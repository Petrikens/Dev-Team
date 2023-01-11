<template>
  <div
    class="people_card"
    v-for="peopleCard in peopleList"
    :key="peopleCard.Id"
  >
    <PeopleCard :peopleCard="peopleCard" />
  </div>
</template>

<script>
import PeopleCard from "../peopleCard/PeopleCard.vue";
export default {
  components: { PeopleCard },
  name: "PeopleList",

  props: {
    peopleList: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
