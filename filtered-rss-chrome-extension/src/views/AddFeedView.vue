<template>
  <div>
    <feed-details></feed-details>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import FeedDetails from "@/components/FeedDetails.vue";

  @Component({
    components: {
      FeedDetails
    }
  })
  export default class AddFeedView extends Vue {

  }
</script>

<style lang="scss" scoped>
</style>

