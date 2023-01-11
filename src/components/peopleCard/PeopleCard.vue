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
        <div class="progress_label">
          <p>Profit</p>
          <p>+ ${{ peopleCard.Profit[0].Amount }}</p>
        </div>
        <ProgressBar
          :style="{
            height: 15 + 'px',
          }"
          :value="peopleCard.Profit[0].Amount / 10"
          :showValue="false"
        />
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
    };
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

.progress_label {
  display: flex;
  justify-content: space-between;
}

.p-progressbar :deep(.p-progressbar-value) {
  background: v-bind(bgColor);
}
</style>
