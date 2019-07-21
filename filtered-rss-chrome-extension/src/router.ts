import Vue from "vue";
import Router from "vue-router";
import DashboardView from "@/views/DashboardView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: DashboardView
    },
    {
      path: "/settings",
      name: "UserSettings",
      component: () =>
        import("@/views/UserSettingsView.vue")
    },
    {
      path: "/feeds",
      name: "ManageFeeds",
      component: () =>
        import("@/views/ManageFeedsView.vue")
    },
    {
      path: "/edit-feed",
      name: "FeedEditor",
      component: () =>
        import("@/views/FeedEditorView.vue")
    }
  ]
});
