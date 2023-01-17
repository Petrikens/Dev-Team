<template>
  <Toast />
  <div class="font-medium text-xl text-center mb-3">Sign Up</div>
  <form @submit.prevent="register" method="POST">
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
      <Button type="submit" label="Sign Up" class="box-border px-6 w-full" />
    </div>
  </form>

  <router-link to="/Dev-Team/login">Sign In</router-link>
</template>

<script>
export default {
  name: "RegisterPage",

  data() {
    return {
      handleEmail: "",
      handlePassword: "",
      errorMessage: "",
    };
  },

  methods: {
    async register() {
      try {
        await this.$store.dispatch(
          `authModule/register`,
          {
            email: this.handleEmail,
            password: this.handlePassword,
          },
          { root: true },
        );
      } catch (error) {
        //handling firebase errors
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
