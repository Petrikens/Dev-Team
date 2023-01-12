<template>
  <Toast />
  <div class="nav_top_login_form_t">Sign In</div>
  <form class="lf" @submit.prevent="doLogin" method="POST">
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
      <Button type="submit" label="Sign In" />
    </div>
  </form>
  <router-link to="/register">Sign Up</router-link>
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
