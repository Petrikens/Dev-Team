import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";

const routes = [
  {
    path: "/Dev-Team/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/Dev-Team/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/Dev-Team",
    name: "main",
    meta: { layout: "main", requiresAuth: true },
    component: () => import("../views/MainPage.vue"),
  },
];

const router = createRouter({
  linkExactActiveClass: "active",
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  //check if the user is registered
  if (to.path === "/login" && auth.currentUser) {
    //if yes, go to home page
    next("/Dev-Team");
    return;
  }

  //if an unregistered user tries to access a page that requires registration
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/Dev-Team/login");
    return;
  }

  next();
});

export default router;
