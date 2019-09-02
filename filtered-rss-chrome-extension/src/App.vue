<template>
  <div id="app" class="bg-secondary">
    <navbar />
    <toolbar v-if="displayToolbar" />

    <div id="main-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Navbar from "@/components/Navbar.vue";
  import Toolbar from "@/components/Toolbar.vue";
  import { feedRefreshTimer } from "@/ts/backround";
  import { initializeDatabase, disposeDatabase } from "@/ts/database/index";
  import { coreService } from "./ts/core";

  @Component({
    components: {
      Navbar,
      Toolbar,
    },
  })
  export default class Home extends Vue {
    public async beforeCreate(): Promise<void> {
      initializeDatabase();
      feedRefreshTimer.start(false);
    }

    public get displayToolbar(): boolean {
      return this.$route.name === "Dashboard";
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
