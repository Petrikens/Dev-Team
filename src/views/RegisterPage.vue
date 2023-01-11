<template>
  <div class="nav_top_login_form_t">Sign Up</div>
  <form class="lf" @submit.prevent="doLogin" method="POST">
    <div class="nav_top_login_form_line">
      <span class="p-float-label">
        <InputText id="login" type="text" v-model="handleLogin" />
        <label for="login">Login</label>
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
      handleLogin: "",
      handlePassword: "",
    };
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
