<template>
  <div>
    <feed-editor :feed="feed" :parent-error="error" @save="addFeed()" @cancel="cancelAdd()"></feed-editor>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import FeedEditor from "@/components/FeedEditor.vue";
  import { FeedSettings } from "@/ts/types";
  import { feedsDatabase } from "@/ts/database/feeds.db";

  @Component({
    components: {
      FeedEditor
    }
  })
  export default class AddFeedView extends Vue {
    private errorMessageTimeoutHandle: number = 0;

    private error: string | null = null;
    private feed: FeedSettings;

    constructor() {
      super();

      this.feed = new FeedSettings();
    }

    public addFeed(): void {
      this.error = feedsDatabase.add(this.feed);

      if (!this.error) {
        this.$router.push("/");
      } else {
        this.errorMessageTimeoutHandle = setTimeout(() => {
          this.error = null;
          clearTimeout(this.errorMessageTimeoutHandle);
          this.errorMessageTimeoutHandle = 0;
        }, 5000);
      }
    }

    public cancelAdd(): void {
      this.$router.push("/");
    }
  }
</script>

<style lang="scss" scoped>
</style>

