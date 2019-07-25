<template>
  <div id="app" class="bg-secondary">
    <navbar />
    <div id="main-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Navbar from "@/components/Navbar.vue";
  import { feedRefreshTimer } from "@/ts/backround";
  import { Notifications } from "@/ts/notifications";
  import { dashboardService } from './ts/core';

  @Component({
    components: {
      Navbar
    }
  })
  export default class Home extends Vue {
    public mounted(): void {
      Notifications.initialize();
      feedRefreshTimer.restart();
      dashboardService.refreshDashboardCache();
    }

    public beforeDestroy(): void {
      feedRefreshTimer.stop();
    }
  }
</script>

<style lang="scss">
  // bootstrap variable overrides
  $font-size-base: 0.8rem;

  // import bootstrap scss
  @import "../node_modules/bootstrap/scss/bootstrap.scss";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 350px;

    #main-content {
      height: 500px;
      overflow-y: auto;
    }
  }
</style>
