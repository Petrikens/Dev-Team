<template>
  <div class="people_card_wrapper">
    <Card>
      <template #header>
        <div class="card_img">
          <img alt="card img" :src="peopleCard.Photo" />
          <div
            class="tags"
            v-for="(tag, index) in peopleCard.Tags"
            :key="tag.Name"
          >
            <card-tag
              :tagName="tag.Name"
              :tagColor="tag.Color"
              :index="index"
            />
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
  </div>
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

<style scoped>
.p-card {
  width: 15em;
  cursor: pointer;
}

.card_img {
  width: 100%;
  height: 200px;
  border-radius: 20px;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
</style>
