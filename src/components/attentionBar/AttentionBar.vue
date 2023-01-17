<template>
  <div class="attention">
    <div class="flex justify-between">
      <p>Attention</p>
      <p>{{ attentionSum }} h</p>
    </div>
    <div class="w-full h-4 bg-barColor" v-if="!attentionSum"></div>
    <div v-else class="flex">
      <div
        v-for="attention in attentionWithWidth"
        :key="attention.amount"
        class="h-4"
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
    //width of profit bar
    basicWidth: {
      type: Number,
    },
    attentionInfo: {
      type: Array,
    },
  },

  computed: {
    //generate the sum of all attentions
    attentionSum() {
      return this.attentionInfo
        ? this.attentionInfo.reduce((acc, curr) => acc + curr.Amount, 0)
        : 0;
    },
    //generate new array for attention bar with width every attention
    attentionWithWidth() {
      return this.attentionInfo.map((attention) => ({
        width: (attention.Amount * this.basicWidth) / this.attentionSum,
        amount: attention.Amount,
        color: attention.Color,
      }));
    },
  },
};
</script>
