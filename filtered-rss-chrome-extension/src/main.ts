import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { generateGuid } from "./ts/utils";
import { Notifications } from "./ts/notifications";

Vue.config.productionTip = false;

try {
    // declare lifecycle hooks listener functions
    function onInstalledListener(): void {}

    function onStartupListener(): void {}

    function onSuspendListener(): void {
        chrome.runtime.onInstalled.removeListener(onInstalledListener);
        chrome.runtime.onStartup.removeListener(onStartupListener);
        chrome.runtime.onSuspend.removeListener(onSuspendListener);
    }

    // register the lifecycle hooks
    // chrome.runtime.onInstalled.addListener(onInstalledListener);
    // chrome.runtime.onStartup.addListener(onStartupListener);
    // chrome.runtime.onSuspend.addListener(onSuspendListener);

    chrome.runtime.onInstalled.addListener(() => {
        Notifications.createNotification(generateGuid(), "onInstalled", "", Date.now(), true);
    });

    chrome.runtime.onStartup.addListener(() => {
        Notifications.createNotification(generateGuid(), "onStartup", "", Date.now(), true);
    });

    chrome.runtime.onSuspend.addListener(() => {
        Notifications.createNotification(generateGuid(), "onSuspend", "", Date.now(), true);
    });

    chrome.runtime.onConnect.addListener(() => {
        Notifications.createNotification(generateGuid(), "onConnect", "", Date.now(), true);
    });
} finally {
    // create the Vue app
    new Vue({
        router,
        render: h => h(App)
    }).$mount("#app");
}
