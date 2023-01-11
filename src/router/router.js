import { createRouter, createWebHistory } from "vue-router";

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
    path: "/main",
    name: "main",
    meta: { layout: "main" },
    component: () => import("../views/MainPage.vue"),
  },
];

const router = createRouter({
  linkExactActiveClass: "active",
  routes,
  history: createWebHistory(),
});

export default router;
