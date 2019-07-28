<template>
  <div class="container d-flex h-100 pb-5">
    <img
      id="img-lemons"
      class="mx-auto row justify-content-center align-self-center"
      src="@/static/lemons.png"
      alt
    />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
    }
  })
  export default class NoNewItemsMessage extends Vue {
  }
</script>

<style lang="scss" scoped>
  #img-lemons {
    width: 128px;
    height: 128px;
  }
</style>

