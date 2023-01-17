<template>
  <Toast />
  <div class="font-medium text-xl text-center mb-3">Sign In</div>
  <form @submit.prevent="doLogin" method="POST">
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
export default {
  name: "LoginPage",

  data() {
    return {
      handleEmail: "",
      handlePassword: "",
      errorMessage: "",
    };
  },

  methods: {
    async doLogin() {
      try {
        await this.$store.dispatch(`authModule/login`, {
          email: this.handleEmail,
          password: this.handlePassword,
        });
      } catch (error) {
        //handling firebase errors
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

        this.$toast.add({
          severity: "warn",
          summary: "Warning",
          detail: this.errorMessage,
          life: 3000,
        });
      }
    },
  },
};
</script>
