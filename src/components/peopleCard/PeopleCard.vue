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
            <Tag
              :value="tag.Name"
              :style="{
                background: '#' + tag.Color,
                top: index * 30 + 10 + 'px',
              }"
            ></Tag>
          </div>
        </div>
      </template>
      <template #title> {{ peopleCard.Name }} </template>
      <template #subtitle> {{ peopleCard.Title }} </template>
      <template #content>
        <div class="profit">
          <div class="profit_label">
            <p>Profit</p>
            <p>+ ${{ peopleCard.Profit[0].Amount }}</p>
          </div>
          <ProgressBar
            id="profitBar"
            :style="{
              height: 15 + 'px',
            }"
            :value="profitBarValue"
            :showValue="false"
          />
        </div>
        <div class="attention">
          <div class="attention_label">
            <p>Attention</p>
            <p>{{ attentionSum }} h</p>
          </div>
          <div class="attention_bar" v-if="!attentionSum"></div>
          <div v-else class="attention_color_wrapper">
            <div
              v-for="attention in attentionWidth"
              :key="attention.amount"
              class="attention_color_bar"
              :style="{
                background: '#' + attention.color,
                width: attention.width + 'px',
              }"
            ></div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "PeopleCard",

  props: {
    peopleCard: {
      type: Object,
    },
  },
  data() {
    return {
      bgColor: "#" + this.peopleCard.Profit[0].Color,
      profitBarValue: this.peopleCard.Profit[0].Amount / 10,
      profitBarWidth: null,
    };
  },

  mounted() {
    this.getProfitBarWidth();
  },

  computed: {
    attentionSum() {
      return this.peopleCard.Attention
        ? this.peopleCard.Attention.reduce((acc, curr) => acc + curr.Amount, 0)
        : 0;
    },

    attentionWidth() {
      return this.peopleCard.Attention.map((attention) => ({
        width: (attention.Amount * this.profitBarWidth) / this.attentionSum,
        amount: attention.Amount,
        color: attention.Color,
      }));
    },
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
  margin-bottom: 20px;
}

.card_img {
  width: 100%;
  height: 200px;
  border-radius: 20px;
  position: relative;
}

.p-tag {
  position: absolute;
  right: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.profit {
  margin-bottom: 10px;
}

.profit_label,
.attention_label {
  display: flex;
  justify-content: space-between;
}

.p-progressbar :deep(.p-progressbar-value) {
  background: v-bind(bgColor);
}

.attention_bar {
  width: 100%;
  height: 15px;
  background: #dee2e6;
}

.attention_color_wrapper {
  display: flex;
}
.attention_color_bar {
  height: 15px;
}
</style>
