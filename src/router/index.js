import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Library from '../views/Library.vue'
import Search from '../views/Search.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      icons:'fas fa-home'
    },
    {
      path: "/Search",
      name: "Search",
      component: Search,
      icons:'fas fa-search'
    },
    {
      path: "/Library",
      name: "Library",
      component: Library,
      icons:'fas fa-book'
    },

  ]
  
});

export default router;
