<template>
  <Card class="w-60 cursor-pointer font-roboto">
    <template #header>
      <div class="w-full h-52 rounded-3xl relative">
        <img
          alt="card img"
          :src="peopleCard.Photo"
          class="w-full h-full object-cover rounded-3xl"
        />
        <div
          class="tags"
          v-for="(tag, index) in peopleCard.Tags"
          :key="tag.Name"
        >
          <card-tag :tagName="tag.Name" :tagColor="tag.Color" :index="index" />
        </div>
      </div>
    </template>
    <template #title> {{ peopleCard.Name }} </template>
    <template #subtitle> {{ peopleCard.Title }} </template>
    <template #content>
      <profit-bar
        :amount="peopleCard.Profit[0].Amount"
        :color="peopleCard.Profit[0].Color"
      />
      <attention-bar
        :basicWidth="profitBarWidth"
        :attentionInfo="peopleCard.Attention"
      />
    </template>
  </Card>
</template>

<script>
import AttentionBar from "../attentionBar/AttentionBar.vue";
import CardTag from "../cardTag/CardTag.vue";
import ProfitBar from "../profitBar/ProfitBar.vue";
export default {
  components: { ProfitBar, AttentionBar, CardTag },
  name: "PeopleCard",

  props: {
    peopleCard: {
      type: Object,
    },
  },
  data() {
    return {
      profitBarWidth: null,
    };
  },

  mounted() {
    this.getProfitBarWidth();
  },

  methods: {
    getProfitBarWidth() {
      this.profitBarWidth = document.getElementById("profitBar").offsetWidth;
    },
  },
};
</script>
