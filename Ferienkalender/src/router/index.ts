import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      // 404
      path: "/:pathMatch(.*)",
      component: Main,
    },
  ],
});

export default router;