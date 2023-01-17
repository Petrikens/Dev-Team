<template>
  <Toast />
  <div class="font-medium text-xl text-center mb-3">Sign In</div>
  <form
    @submit.prevent="login({ email: handleEmail, password: handlePassword })"
    method="POST"
  >
    <div class="w-full mb-5">
      <span class="p-float-label">
        <InputText
          id="login"
          type="text"
          v-model="handleEmail"
          class="w-full"
        />
        <label for="login">Email</label>
      </span>
    </div>
    <div class="w-full mb-5">
      <span class="p-float-label">
        <InputText
          id="pasword"
          type="password"
          v-model="handlePassword"
          class="w-full"
        />
        <label for="pasword">Password</label>
      </span>
    </div>

    <div class="w-full mb-5">
      <Button type="submit" label="Sign In" class="box-border px-6 w-full" />
    </div>
  </form>
  <router-link to="/Dev-Team/register">Sign Up</router-link>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "../stores/AuthStore";
export default {
  name: "LoginPage",

  data() {
    return {
      handleEmail: "",
      handlePassword: "",
    };
  },

  computed: {
    ...mapState(useAuthStore, ["errorMessage"]),
  },

  methods: {
    ...mapActions(useAuthStore, ["login"]),
  },

  watch: {
    errorMessage(newMessage) {
      if (newMessage) {
        this.$toast.add({
          severity: "warn",
          summary: "Warning",
          detail: newMessage,
          life: 3000,
        });
      }
    },
  },
};
</script>
