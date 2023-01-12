<template>
  <div class="edit_card_wrapper">
    <loading-spinner v-if="isLoading" />
    <Card v-else>
      <template #header>
        <div class="card_img">
          <img alt="card img" :src="personInfo.Photo" />
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
  <div class="button_block">
    <Button
      label="Close"
      icon="pi pi-times"
      class="p-button-text"
      @click="() => dialogRef.close()"
    />
    <Button
      label="Edit"
      icon="pi pi-check"
      class="p-button-text"
      @click="createTask"
    />
  </div>
</template>

<script>
import * as peopleApi from "../../api/peopleApi";
import AttentionBar from "../attentionBar/AttentionBar.vue";
import CardTag from "../cardTag/CardTag.vue";
import ProfitBar from "../profitBar/ProfitBar.vue";
import LoadingSpinner from "../uiComponents/LoadingSpinner.vue";
import { mapGetters } from "vuex";

export default {
  name: "EditPersonCard",

  inject: ["dialogRef"],

  components: { ProfitBar, AttentionBar, CardTag, LoadingSpinner },

  data() {
    return {
      isLoading: true,
      personInfo: null,
      handleName: null,
      handleTitle: null,
    };
  },

  mounted() {
    this.fetchPerson();

    this.getProfitBarWidth();
  },

  computed: {
    ...mapGetters("authModule", ["getUser"]),
  },

  methods: {
    async fetchPerson() {
      console.log(this.getUser);
      try {
        const response = await peopleApi.fetchPerson(
          this.dialogRef.data.personId,
        );

        this.personInfo = await response.data;

        this.handleName = await response.data.Name;

        this.handleTitle = await response.data.Title;

        this.isLoading = false;
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Ошибка",
          detail: error,
          life: 3000,
        });

        this.isLoading = false;
      }
    },

    async createTask() {
      try {
        const data = JSON.stringify({
          Name: this.handleName,
          Title: this.handleTitle,
        });

        const config = {
          headers: {
            "X-Auth-Token": this.getUser.accessToken,
          },
        };

        const id = this.personInfo.Id;

        const response = await peopleApi.editPerson(data, config, id);

        console.log(response.data);
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Ошибка",
          detail: error,
          life: 3000,
        });
      }
    },

    getProfitBarWidth() {
      this.profitBarWidth = document.getElementById("profitBar").offsetWidth;
    },
  },
};
</script>

<style scoped>
.edit_card_wrapper {
  display: flex;
  justify-content: center;
  position: relative;
}
.p-card {
  width: 15em;
  margin-bottom: 20px;
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
.button_block {
  display: flex;
  justify-content: space-between;
}
</style>
