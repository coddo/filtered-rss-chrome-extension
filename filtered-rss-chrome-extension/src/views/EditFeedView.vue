<template>
  <div>
    <feed-editor
      :feed="feed"
      :parent-error="error"
      show-delete-button
      @save="editFeed()"
      @cancel="cancelEdit()"
    ></feed-editor>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  import FeedEditor from "@/components/FeedEditor.vue";
  import { FeedSettings } from "@/ts/types";
  import { feedsDatabase } from "@/ts/database/feeds.db";

  @Component({
    components: {
      FeedEditor
    }
  })
  export default class EditFeedView extends Vue {
    private errorMessageTimeoutHandle: number = 0;
    private error: string | null = null;

    @Prop(String)
    public feedId!: string;

    constructor() {
      super();
    }

    public mounted(): void {
      if (!this.feed) {
        this.$router.push("/feeds");
        return;
      }
    }

    public get feed(): FeedSettings | null {
      return feedsDatabase.get(this.feedId);
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
