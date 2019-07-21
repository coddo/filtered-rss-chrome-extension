import Vue from "vue";
import Router from "vue-router";
import DashboardView from "./views/DashboardView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardView
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () =>
    //     import("./views/About.vue")
    // }
  ]
});
