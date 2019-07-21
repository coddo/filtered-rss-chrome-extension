<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand text-white">Filtered RSS</router-link>

    <div class="ml-auto">
      <router-link to="/settings">
        <img class="mr-2" src="@/static/settings.png" alt="settings" title="Manage settings" />
      </router-link>
      <router-link to="/feeds">
        <img class="mr-2" src="@/static/rss.png" alt="manage rss" title="Manage RSS feeds" />
      </router-link>
      <router-link to="/feeds/add">
        <img class src="@/static/add.png" alt="add rss" title="Add RSS feed" />
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
    }
  })
  export default class Navbar extends Vue { }
</script>

<style lang="scss" scoped>
  #btn-add-feed {
    border-radius: 50%;
    font-size: 14px;
  }

  img {
    width: 36px !important;
    height: 36px !important;
    cursor: pointer;
  }
</style>

