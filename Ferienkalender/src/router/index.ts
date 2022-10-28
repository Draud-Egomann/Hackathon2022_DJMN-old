import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import Statistic from "../components/Statistic.vue";
import Anfrage from "../components/anfrage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/statistic",
      component: Statistic,
    },
    {
      path: "/anfrage",
      component: Anfrage,
    },
    {
      // 404
      path: "/:pathMatch(.*)",
      component: Main,
    },
  ],
});

export default router;