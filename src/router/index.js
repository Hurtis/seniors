import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
/* eslint-disable */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/bookmarks",
    name: "bookmarks",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BookmarksView.vue"),
  },
  {
    path: "/foto",
    name: "foto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FotoView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewsView.vue"),
  },
  {
    path: "/content",
    name: "content",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContentView.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CalendarView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
