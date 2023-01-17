import router from "../router/router";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

export const authModule = {
  state() {
    return {
      user: null,
    };
  },

  getters: {
    getUser: (state) => state.user,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
  },

  actions: {
    async login({ commit }, details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);

        commit("SET_USER", auth.currentUser);

        router.push("/Dev-Team");
      } catch (error) {
        throw error;
      }
    },

    async register({ commit }, details) {
      const { email, password } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);

        commit("SET_USER", auth.currentUser);

        router.push("/Dev-Team");
      } catch (error) {
        throw error;
      }
    },

    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      router.push("/Dev-Team/login");
    },

    //set observer onAuthStateChanged
    fetchUser({ commit }) {
      auth.onAuthStateChanged((user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);
          //if the user is registered, when reloading the page, we will get to the home page
          if (
            router.isReady() &&
            router.currentRoute.value.path === "/Dev-Team/login"
          ) {
            router.push("/Dev-Team");
          }
        }
      });
    },
  },

  namespaced: true,
};
