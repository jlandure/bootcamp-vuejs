import Home from "./components/Home";
import Vue from "vue";
import Favorite from "./components/Favorite";
import VueRouter from "vue-router";

const routes = [
  { path: "/home", component: Home },
  { path: "/fav", component: Favorite },
  { path: "/*", redirect: "/home" }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.use(VueRouter);

export default router;
