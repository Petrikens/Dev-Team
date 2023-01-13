<template>
  <Toast />
  <div class="nav_top_login_form_t">Sign Up</div>
  <form class="lf" @submit.prevent="register" method="POST">
    <div class="nav_top_login_form_line">
      <span class="p-float-label">
        <InputText id="login" type="text" v-model="handleEmail" />
        <label for="login">Email</label>
      </span>
    </div>
    <div class="nav_top_login_form_line">
      <span class="p-float-label">
        <InputText id="pasword" type="password" v-model="handlePassword" />
        <label for="pasword">Password</label>
      </span>
    </div>

    <div class="nav_top_login_form_line">
      <Button type="submit" label="Sign Up" />
    </div>
  </form>

  <router-link to="/login">Sign In</router-link>
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

<style scoped>
.nav_top_login_form_t {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #242e42;
  margin-bottom: 10px;
}

.nav_top_login_form_line {
  width: 100%;
  margin-bottom: 20px;
}

.p-button {
  box-sizing: border-box;
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;
}

.p-inputtext {
  width: 100%;
}
</style>
