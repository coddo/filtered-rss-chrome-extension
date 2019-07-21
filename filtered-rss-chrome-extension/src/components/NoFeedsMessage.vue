<template>
  <div class="mt-5 text-white text-center">
    <div class="container-fluid mb-2">
      <p class="d-inline mr-2">You have no feeds configured</p>
      <img id="img-sad-face" src="@/static/sad-face.png" alt="sad-face" />
    </div>
    <button class="btn btn-success mr-2" @click="goToAddFeedPage()">Add new feed</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
    }
  })
  export default class NoFeedsMessage extends Vue {
    public goToAddFeedPage(): void {
      this.$router.push("/feeds/add");
    }
  }
</script>

<style lang="scss" scoped>
  #img-sad-face {
    width: 24px;
    height: 24px;
  }
</style>

