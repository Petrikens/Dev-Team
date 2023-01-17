import { defineStore } from "pinia";
import { auth } from "../firebase";
import router from "../router/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    userInfo: null,
    errorMessage: null,
  }),

  actions: {
    async login(userInfo) {
      const { email, password } = userInfo;

      try {
        await signInWithEmailAndPassword(auth, email, password);

        this.userInfo = auth.currentUser;

        router.push("/Dev-Team");
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            this.errorMessage = "User not found";
            break;
          case "auth/wrong-password":
            this.errorMessage = "Wrong password";
            break;
          default:
            this.errorMessage = "Something went wrong";
        }
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    },

    async register(userInfo) {
      const { email, password } = userInfo;

      try {
        await createUserWithEmailAndPassword(auth, email, password);

        this.userInfo = auth.currentUser;

        router.push("/Dev-Team");
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            this.errorMessage = "Email already in use";
            break;
          case "auth/invalid-email":
            this.errorMessage = "Invalid email";
            break;
          case "auth/operation-not-allowed":
            this.errorMessage = "Operation not allowed";
            break;
          case "auth/weak-password":
            this.errorMessage = "Weak password";
            break;
          default:
            this.errorMessage = "Something went wrong";
        }
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    },

    async logout() {
      await signOut(auth);

      this.userInfo = null;

      router.push("/Dev-Team/login");
    },

    //set observer onAuthStateChanged
    fetchUser() {
      auth.onAuthStateChanged((user) => {
        if (user === null) {
          this.userInfo = null;
        } else {
          this.userInfo = user;
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
});
