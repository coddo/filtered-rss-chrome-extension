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
            component: () => import("@/views/UserSettingsView.vue")
        },
        {
            path: "/feeds",
            name: "ManageFeeds",
            component: () => import("@/views/ManageFeedsView.vue")
        },
        {
            path: "/feeds/add",
            name: "AddFeedView",
            component: () => import("@/views/AddFeedView.vue")
        },
        {
            path: "/feeds/edit/:feedId",
            name: "EditFeedView",
            component: () => import("@/views/EditFeedView.vue"),
            props: true
        }
    ]
});
