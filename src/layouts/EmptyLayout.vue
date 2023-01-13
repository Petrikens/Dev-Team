<template>
  <div class="content_login_component">
    <div class="nav_top_login_form">
      <router-view />
    </div>
  </div>
</template>

<script>
//layout for login/register pages
export default {};
</script>

<style scoped>
.content_login_component {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.nav_top_login_form {
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(215, 222, 227, 0.45);
  border-radius: 8px;
  padding: 45px;
  width: 465px;
}
</style>
