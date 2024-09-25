import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CapiView from "@/views/CapiView.vue";
import SfilateView from "@/views/SfilateView.vue";
import NotFound from "@/views/NotFound.vue";

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
    path: "/Sfilate",
    name: "Sfilate",
    component: SfilateView,
  },
  {
    path: "/capi/:id",
    name: "CapiView",
    component: CapiView,
    props: true,
  },
  {
    path: "/catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
