<template>
  <div id="app" class="bg-secondary">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Navbar from "@/components/Navbar.vue";
  import { feedRefreshTimer } from "./ts/backround";

  @Component({
    components: {
      Navbar
    }
  })
  export default class Home extends Vue {
    mounted(): void {
      feedRefreshTimer.restart();
    }

    beforeDestroy(): void {
      feedRefreshTimer.stop();
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/dist/css/bootstrap.css";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 350px;
    height: 500px;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
