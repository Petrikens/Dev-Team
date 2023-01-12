<template>
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

<script>
export default {
  name: "AttentionBar",

  props: {
    basicWidth: {
      type: Number,
    },
    attentionInfo: {
      type: Array,
    },
  },

  computed: {
    attentionSum() {
      return this.attentionInfo
        ? this.attentionInfo.reduce((acc, curr) => acc + curr.Amount, 0)
        : 0;
    },

    attentionWidth() {
      return this.attentionInfo.map((attention) => ({
        width: (attention.Amount * this.basicWidth) / this.attentionSum,
        amount: attention.Amount,
        color: attention.Color,
      }));
    },
  },
};
</script>

<style scoped>
.attention_label {
  display: flex;
  justify-content: space-between;
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
