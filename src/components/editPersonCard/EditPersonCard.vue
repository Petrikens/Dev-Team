<template>
  <div class="flex justify-center relative">
    <loading-spinner v-if="isLoading" />
    <Card v-else class="w-60 cursor-pointer mb-5">
      <template #header>
        <div class="w-full h-52 rounded-3xl relative">
          <img
            alt="card img"
            :src="personInfo.Photo"
            class="w-full h-full object-cover rounded-3xl"
          />
          <div
            class="tags"
            v-for="(tag, index) in personInfo.Tags"
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
      <template #title>
        <InputText type="text" v-model="handleName" />
      </template>
      <template #subtitle>
        <InputText type="text" v-model="handleTitle" />
      </template>
      <template #content>
        <profit-bar
          :amount="personInfo.Profit[0].Amount"
          :color="personInfo.Profit[0].Color"
        />
        <attention-bar
          :basicWidth="profitBarWidth"
          :attentionInfo="personInfo.Attention"
        />
      </template>
    </Card>
  </div>

  <div class="flex justify-between">
    <Button
      label="Close"
      icon="pi pi-times"
      class="p-button-text"
      @click="() => dialogRef.close()"
    />
    <Button
      label="Save"
      icon="pi pi-check"
      class="p-button-text"
      @click="editCard({ name: handleName, title: handleTitle })"
    />
  </div>
</template>

<script>
import AttentionBar from "../attentionBar/AttentionBar.vue";
import CardTag from "../cardTag/CardTag.vue";
import ProfitBar from "../profitBar/ProfitBar.vue";
import LoadingSpinner from "../uiComponents/LoadingSpinner.vue";
import { mapActions, mapState } from "pinia";
import { usePersonInfoStore } from "../../stores/PersonInfoStore";

export default {
  name: "EditPersonCard",

  inject: ["dialogRef"],

  components: { ProfitBar, AttentionBar, CardTag, LoadingSpinner },

  data() {
    return {
      profitBarWidth: null,
      handleName: null,
      handleTitle: null,
    };
  },

  mounted() {
    //fetch person info, when component is mounted
    this.fetchPerson(this.dialogRef.data.personId);

    //take profit width for attention bar
    this.getProfitBarWidth();
  },

  computed: {
    ...mapState(usePersonInfoStore, [
      "personInfo",
      "isLoading",
      "errorMessage",
    ]),
  },

  methods: {
    ...mapActions(usePersonInfoStore, ["fetchPerson"]),

    ...mapActions(usePersonInfoStore, ["editCard"]),

    getProfitBarWidth() {
      this.profitBarWidth = document.getElementById("profitBar").offsetWidth;
    },
  },

  watch: {
    personInfo() {
      this.handleName = this.personInfo.Name;
      this.handleTitle = this.personInfo.Title;
    },
    errorMessage(newMessage) {
      if (newMessage) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: newMessage,
          life: 3000,
        });
      }
    },
  },
};
</script>
