<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-white">Your filtered RSS feeds</a>
    <button class="btn btn-outline-success ml-auto" type="button">+</button>
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
</style>

