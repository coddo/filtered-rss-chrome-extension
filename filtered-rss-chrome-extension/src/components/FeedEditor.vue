<template>
  <div id="feed-editor">
    <div class="alert alert-danger" role="alert" v-if="error || parentError">
      <p class="text-center my-0">{{ error }} {{ parentError }}</p>
    </div>

    <div id="toolbar" class="d-flex mb-2 py-1 px-3">
      <img
        class="img-btn-toolbar mt-1"
        src="@/static/remove.png"
        alt="delete-feed"
        title="Delete this feed"
        v-if="showDeleteButton"
        @click="deleteFeed()"
      />
      <img
        class="img-btn-toolbar mt-1 ml-auto"
        src="@/static/cancel.png"
        alt="cancel-changes"
        title="Cancel changes"
        @click="cancel()"
      />
      <img
        class="img-btn-toolbar mt-1 ml-2"
        src="@/static/ok.png"
        alt="save-feed"
        title="Save changes"
        @click="saveFeed()"
      />
    </div>

    <feed-details :feed="feed" :is-loading="isLoading" @save="saveFeed()"></feed-details>

    <feed-filters :feed="feed" @save="saveFeed()"></feed-filters>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
  import { FeedSettings, FeedItemFilter, Feed } from "@/ts/types";
  import { FilterTarget, FilterAction } from "../ts/filters";
  import { fetchFeedDataAsync } from "@/ts/fetcher";
  import { feedsDatabase } from "@/ts/database/feeds.db";
  import FeedDetails from "./FeedDetails.vue";
  import FeedFilters from "./FeedFilters.vue";

  @Component({
    components: {
      FeedDetails,
      FeedFilters,
    }
  })
  export default class FeedEditor extends Vue {
    private readonly EVENT_SAVE: string = "save";

    private clearErrorTimeoutHandle: number = 0;
    private isLoading: boolean = false;
    private error: string | null = null;

    @Prop(String)
    public parentError!: string | null;

    @Prop(FeedSettings)
    public feed!: FeedSettings;

    @Prop(Boolean)
    public showDeleteButton!: boolean;

    constructor() {
      super();
    }

    @Emit("cancel")
    public cancel(): void {
      // nothing to do here
    }

    @Watch("error")
    public errorMessageChanged(newValue: string, oldValue: string): void {
      // clear existing timeout
      if (this.clearErrorTimeoutHandle > 0) {
        clearTimeout(this.clearErrorTimeoutHandle);
        this.clearErrorTimeoutHandle = 0;
      }

      // ignore if the error was just cleared
      if (!newValue) {
        return;
      }

      // set timeout to clear the error
      this.clearErrorTimeoutHandle = setTimeout(() => {
        this.error = null;
      }, 5000);
    }

    public async saveFeed(): Promise<void> {
      try {
        this.isLoading = true;
        if (!await this.isDataValidAsync()) {
          return;
        }

        this.$emit(this.EVENT_SAVE);
      } finally {
        this.isLoading = false;
      }
    }

    public deleteFeed(): void {
      this.error = feedsDatabase.delete(this.feed.id);
      if (this.error) {
        return;
      }

      this.$router.push("/feeds");
    }

    private async isDataValidAsync(): Promise<boolean> {
      if (!this.feed.name || this.feed.name === "") {
        this.error = "You haven't specified the feed name";
        return false;
      }

      if (!this.feed.url || this.feed.url === "") {
        this.error = "You haven't specified the feed URL";
        return false;
      }

      for (let i: number = 0; i < this.feed.filters.length; i++) {
        const filter: FeedItemFilter = this.feed.filters[i];
        if (!filter.target || filter.target === "" || filter.target === FilterTarget.Unknown) {
          this.error = `You haven't specified the target field for filter ${i + 1}`;
          return false;
        }

        if (!filter.action || filter.action === "" || filter.action === FilterAction.Unknown) {
          this.error = `You haven't specified the validation action for filter ${i + 1}`;
          return false;
        }

        if (!filter.value || filter.value === "") {
          this.error = `You haven't specified the validation value for filter ${i + 1}`;
          return false;
        }
      }

      const feedResult: Feed | null = await fetchFeedDataAsync(this.feed);
      if (feedResult === null) {
        this.error = "This feed seems to be invalid or inexistent";
        return false;
      }

      return true;
    }
  }
</script>

<style lang="scss" scoped>
  .img-btn-toolbar {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
</style>

