<template>
  <div>
    <feed-details :feed="feed" :parent-error="error" @save="addFeed()"></feed-details>
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
    private errorMessageTimeoutHandle: number = 0;

    public error: string | null = null;
    public feed: FeedSettings;

    constructor() {
      super();

      this.feed = new FeedSettings();
    }

    public addFeed(): void {
      this.error = feedsDatabase.addConfigurationFeed(this.feed);

      if (!this.error) {
        this.$router.push("/");
      } else {
        this.errorMessageTimeoutHandle = setTimeout(() => {
          this.error = null;
          clearTimeout(this.errorMessageTimeoutHandle);
        }, 5000);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

