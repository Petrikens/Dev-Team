import { defineStore } from "pinia";
import * as peopleApi from "../api/peopleApi";

export const usePeopleStore = defineStore("peopleStore", {
  state: () => ({
    peopleList: [],
    perPage: 5,
    page: 1,
    isLoading: true,
    errorMessage: null,
    personInfo: null,
  }),

  actions: {
    //function for fetching people list
    async fetchPeople() {
      try {
        const data = {
          params: {
            pp: this.perPage,
            p: this.page,
          },
        };

        const response = await peopleApi.fetchPeopleList(data);

        this.peopleList = await response.data;

        this.isLoading = false;
      } catch (error) {
        this.errorMessage = error;

        this.isLoading = false;

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    },

    //load more people when scroll the page
    async loadMorePeople() {
      try {
        this.page += 1;

        const data = {
          params: {
            pp: this.perPage,
            p: this.page,
          },
        };

        const response = await peopleApi.fetchPeopleList(data);

        this.peopleList = [...this.peopleList, ...response.data];

        this.isLoading = false;
      } catch (error) {
        this.errorMessage = error;

        this.isLoading = false;

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    },
  },
});
