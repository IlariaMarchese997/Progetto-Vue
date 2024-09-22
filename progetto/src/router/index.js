import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContattiView from "@/views/ContattiView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/capi",
    name: "capi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CapiView.vue"),
  },
  {
    path: "/contatti",
    name: "contatti",
    component: ContattiView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
