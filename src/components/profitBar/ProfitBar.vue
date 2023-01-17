<template>
  <div class="mb-3">
    <div class="flex justify-between">
      <p>Profit</p>
      <p>+ ${{ amount }}</p>
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
</template>

<script>
export default {
  name: "ProfitBar",

  props: {
    amount: {
      type: Number,
    },
    color: {
      type: String,
    },
  },

  data() {
    return {
      profitBarValue: this.amount / 10,
      bgColor: "#" + this.color,
    };
  },
};
</script>

<style scoped>
.p-progressbar :deep(.p-progressbar-value) {
  background: v-bind(bgColor);
}
</style>
