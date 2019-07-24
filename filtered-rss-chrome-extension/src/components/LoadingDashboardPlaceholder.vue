<template>
  <div class="container d-flex h-100 pb-5">
    <img
      id="loading-spinner"
      class="mx-auto row justify-content-center align-self-center"
      src="@/static/loading.gif"
      alt="plop-plop"
    />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
    }
  })
  export default class LoadingDashboardPlaceholder extends Vue {
  }
</script>

<style lang="scss" scoped>
  #loading-spinner {
    width: 64px;
    height: 64px;
  }
</style>

