import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";
import * as peopleApi from "../api/peopleApi";

export const usePersonInfoStore = defineStore("personInfoStore", {
  state: () => ({
    personInfo: null,
    isLoading: true,
    errorMessage: null,
  }),

  actions: {
    async fetchPerson(id) {
      try {
        const response = await peopleApi.fetchPerson(id);

        this.personInfo = await response.data;

        this.isLoading = false;
      } catch (error) {
        this.errorMessage = error;

        this.isLoading = false;

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    },

    async editCard(editedInfo) {
      const { name, title } = editedInfo;
      const authStore = useAuthStore();
      try {
        //edited data
        const data = JSON.stringify({
          Name: name,
          Title: title,
        });
        //auth token from firebase
        const config = {
          headers: {
            "X-Auth-Token": authStore.userInfo.accessToken,
          },
        };

        //person id
        const id = this.personInfo.Id;

        const response = await peopleApi.editPerson(data, config, id);
      } catch (error) {
        this.errorMessage = error;

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    },
  },
});
