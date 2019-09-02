import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Notifications } from "./ts/notifications";
import { feedRefreshTimer } from "./ts/backround";

Vue.config.productionTip = false;

// declare lifecycle hooks listener functions
function onInstalledListener(): void {
    Notifications.requestPermission();
    feedRefreshTimer.restart();
}

function onSuspendListener(): void {
    if (chrome.runtime.onInstalled.hasListener(onInstalledListener)) {
        chrome.runtime.onInstalled.removeListener(onInstalledListener);
    }
}

try {
    // register the lifecycle hooks
    chrome.runtime.onInstalled.addListener(onInstalledListener);
    chrome.runtime.onSuspend.addListener(onSuspendListener);
} finally {
    new Vue({
        router,
        render: h => h(App)
    }).$mount("#app");
}
