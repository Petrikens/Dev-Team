<template>
  <Tag
    :value="tagName"
    :style="{
      background: '#' + tagColor,
      top: index * 30 + 10 + 'px',
    }"
  ></Tag>
</template>

<script>
export default {
  name: "CardTag",

  props: {
    tagName: {
      type: String,
    },

    tagColor: {
      type: String,
    },

    index: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.p-tag {
  position: absolute;
  right: 10px;
}
</style>
