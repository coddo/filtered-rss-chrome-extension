<template>
  <div>
    <feed-details
      :feed="feed"
      :parent-error="error"
      show-delete-button
      @save="editFeed()"
      @cancel="cancelEdit()"
    ></feed-details>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  import FeedDetails from "@/components/FeedDetails.vue";
  import { FeedSettings } from "@/ts/types";
  import { feedsDatabase } from "@/ts/database/feeds.db";

  @Component({
    components: {
      FeedDetails
    }
  })
  export default class EditFeedView extends Vue {
    private errorMessageTimeoutHandle: number = 0;

    private error: string | null = null;
    private feed!: FeedSettings | null;

    @Prop(String)
    public feedId!: string;

    constructor() {
      super();

      this.feed = feedsDatabase.get(this.feedId);
    }

    mounted(): void {
      if (!this.feed) {
        this.$router.push("/feeds");
        return;
      }
    }

    public editFeed(): void {
      if (!this.feed) {
        this.error = "An unknown error has occured";
      } else {
        this.error = feedsDatabase.update(this.feed);
      }

      if (!this.error) {
        this.$router.push("/feeds");
      } else {
        this.errorMessageTimeoutHandle = setTimeout(() => {
          this.error = null;
          clearTimeout(this.errorMessageTimeoutHandle);
          this.errorMessageTimeoutHandle = 0;
        }, 5000);
      }
    }

    public cancelEdit(): void {
      this.$router.push("/feeds");
    }
  }
</script>

<style lang="scss" scoped>
</style>

