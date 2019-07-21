<template>
  <div>
    <feed-details :feed="feed" @save="addFeed()"></feed-details>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import FeedDetails from "@/components/FeedDetails.vue";
  import { FeedSettings } from "@/ts/types";
  import { feedsDatabase } from "@/ts/database/feeds.db";

  @Component({
    components: {
      FeedDetails
    }
  })
  export default class AddFeedView extends Vue {
    public feed: FeedSettings;

    constructor() {
      super();

      this.feed = new FeedSettings();
    }

    public addFeed(): void {
      var success: boolean = feedsDatabase.addConfigurationFeed(this.feed);

      if (success) {
        this.$router.push("/");
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

