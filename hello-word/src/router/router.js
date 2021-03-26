import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Vod from "../views/Vod.vue";

const routes = [
  {
    path: "",
    redirect:"/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/vod/:id",
    name: "Vod",
    component: Vod
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
