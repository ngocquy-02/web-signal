import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GetSignal from "../views/GetSignal.vue";
import BlogView from "../views/BlogView.vue";
import DeveloperView from "../views/DeveloperView.vue";
import CareerView from "../views/CareerView.vue";
import DonateView from "../views/DonateView.vue";
import HelpView from "../views/HelpView.vue";

import BlogDetail from "../components/blog/BlogDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/download",
    name: "GetSignal",
    component: GetSignal,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },
  {
    path: "/docs",
    name: "Developer",
    component: DeveloperView,
  },
  {
    path: "/work",
    name: "Career",
    component: CareerView,
  },
  {
    path: "/donate",
    name: "Donate",
    component: DonateView,
  },
  {
    path: "/help",
    name: "Help",
    component: HelpView,
  },


  {
    path: "/blog/detail",
    name: "BlogDetail",
    component: BlogDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
