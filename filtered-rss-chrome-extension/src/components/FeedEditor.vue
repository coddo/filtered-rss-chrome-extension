<template>
  <div id="feed-editor">
    <div class="alert alert-danger" role="alert" v-if="error || parentError">
      <p class="text-center my-0">{{ error }} {{ parentError }}</p>
    </div>

    <div id="feed-details" class="mt-3 mx-3 p-3 bg-white">
      <div class="d-flex mb-2">
        <h3 class="pt-1">Details</h3>
        <img
          id="loading-spinner"
          class="ml-1"
          src="@/static/loading.gif"
          alt="plop-plop"
          v-if="isLoading"
        />
        <img
          class="img-btn img-btn-feed-opts ml-auto mt-1"
          src="@/static/remove.png"
          alt="delete-feed"
          title="Delete this feed"
          v-if="showDeleteButton"
          @click="deleteFeed()"
        />
        <img
          class="img-btn img-btn-feed-opts mt-1"
          src="@/static/cancel.png"
          alt="cancel-changes"
          title="Cancel changes"
          :class="showDeleteButton ? 'ml-2' : 'ml-auto'"
          @click="cancel()"
        />
        <img
          class="img-btn img-btn-feed-opts mt-1 ml-2"
          src="@/static/ok.png"
          alt="save-feed"
          title="Save changes"
          @click="saveFeed()"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="feed-name">Name</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Feed display name"
          aria-describedby="feed-name"
          v-model="feed.name"
          @keyup.enter="saveFeed()"
        />
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="feed-url">URL</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Feed URL"
          aria-describedby="feed-url"
          v-model="feed.url"
          @keyup.enter="saveFeed()"
        />
      </div>
    </div>

    <div id="feed-filters" class="mt-3 mx-3 p-3 bg-white">
      <div class="d-flex">
        <h3 class="pt-1">Filters</h3>
        <button
          id="btn-add-filter"
          class="btn btn-success ml-auto mb-2 mt-1"
          title="Add new filter"
          v-if="!feed.filters || feed.filters.length === 0"
          @click="addFilter()"
        >Add filters</button>
      </div>

      <div class="mb-4" v-for="(filter, filterIndex) in feed.filters" :key="filterIndex">
        <div class="input-group">
          <select class="custom-select" v-model="feed.filters[filterIndex].target">
            <option
              v-for="filterTarget in filterTargets"
              :key="filterIndex + '-' + filterTarget"
              :value="filterTarget"
            >{{ filterTarget }}</option>
          </select>

          <select class="custom-select" v-model="feed.filters[filterIndex].action">
            <option
              v-for="filterAction in filterActions"
              :key="filterIndex + '-' + filterAction"
              :value="filterAction"
            >{{ getFilterActionText(filterAction) }}</option>
          </select>
        </div>

        <div class="input-group mt-1">
          <input class="form-control mr-1" type="text" v-model="feed.filters[filterIndex].value" />
          <img
            class="img-btn img-btn-filter mt-1 mr-1"
            src="@/static/remove.png"
            alt="remove-filter"
            title="Remove this filter"
            @click="removeFilter(filterIndex)"
          />
          <img
            class="img-btn img-btn-filter mt-1 mr-1"
            src="@/static/add.png"
            alt="add-filter"
            title="Add new filter"
            @click="addFilter()"
          />
          <img
            class="img-btn img-btn-filter mt-1"
            src="@/static/half_star.png"
            alt="clone-filter"
            title="Clone current filter (without value)"
            @click="cloneFilter(feed.filters[filterIndex])"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
  import { FeedSettings, FeedItemFilter, Feed } from "@/ts/types";
  import { FilterTarget, FilterAction } from "../ts/filters";
  import { fetchFeedDataAsync } from "@/ts/fetcher";
  import { feedsDatabase } from "@/ts/database/feeds.db";

  @Component({
    components: {
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

    public get filterTargets(): string[] {
      return FilterTarget.list.filter((value: string) => value !== FilterTarget.Unknown);
    }

    public get filterActions(): string[] {
      return FilterAction.list.filter((value: string) => value !== FilterAction.Unknown);
    }

    public getFilterActionText(filterAction: string): string {
      switch (filterAction) {
        case FilterAction.Equals:
          return "Is exactly";
        case FilterAction.NotEquals:
          return "Is not exactly";
        case FilterAction.Contains:
          return "Contains";
        case FilterAction.NotContains:
          return "Does not contain";
        case FilterAction.StartWith:
          return "Starts with";
        case FilterAction.NotStartsWith:
          return "Does not start with";
        case FilterAction.EndsWith:
          return "Ends with";
        case FilterAction.NotEndsWith:
          return "Does not end with";
        case FilterAction.Regex:
          return "Regex";
        default:
          return "Unknown";
      }
    }

    public cloneFilter(filter: FeedItemFilter): void {
      this.feed.filters.push({
        action: filter.action,
        target: filter.target,
      } as FeedItemFilter);
    }

    public addFilter(): void {
      this.feed.filters.push(new FeedItemFilter());
    }

    public removeFilter(index: number): void {
      this.feed.filters.splice(index, 1);
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

    @Emit("cancel")
    public cancel(): void {
      // nothing to do here
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
  .input-group .input-group-prepend .input-group-text {
    width: 60px;
  }

  #feed-filters {
    max-height: 250px;
    overflow-y: auto;
  }

  #loading-spinner {
    width: 36px;
    height: 36px;
  }

  .img-btn {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
</style>

