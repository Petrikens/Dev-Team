import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/",
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
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }

  next();
});

export default router;
