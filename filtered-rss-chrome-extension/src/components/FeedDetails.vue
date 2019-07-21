<template>
  <div id="feed-editor">
    <div id="feed-details" class="mt-3 mx-3 p-3 bg-white">
      <div class="d-flex mb-2">
        <h3 class="pt-1">Details</h3>
        <button class="btn btn-danger ml-auto" @click="cancelAdd()">Cancel</button>
        <button class="btn btn-success ml-1" @click="saveFeed()">Save</button>
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
        />
      </div>
    </div>

    <div id="feed-filters" class="mt-3 mx-3 p-3 bg-white">
      <div class="d-flex">
        <h3 class="pt-1">Filters</h3>
        <button
          id="btn-add-filter"
          class="btn btn-success ml-auto mb-2"
          title="Add new filter"
          v-if="!feed.filters || feed.filters.length === 0"
          @click="addFilter()"
        >Add filters</button>
      </div>

      <div class="mb-3" v-for="(filter, filterIndex) in feed.filters" :key="filterIndex">
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
            >{{ filterAction }}</option>
          </select>
        </div>

        <div class="input-group">
          <input class="form-control mr-1" type="text" v-model="feed.filters[filterIndex].value" />
          <button
            class="btn btn-danger mr-1"
            title="Delete this filter"
            @click="removeFilter(filterIndex)"
          >-</button>
          <button class="btn btn-success" title="Add new filter" @click="addFilter()">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit } from "vue-property-decorator";
  import { FeedSettings, FeedItemFilter, Feed } from "@/ts/types";
  import { FilterTarget, FilterAction } from "../ts/filters";
  import { fetchFeedDataAsync } from "@/ts/fetcher";

  @Component({
    components: {
    }
  })
  export default class FeedDetails extends Vue {
    private readonly EVENT_SAVE: string = "save";

    @Prop(FeedSettings)
    public feed!: FeedSettings;

    constructor() {
      super();
    }

    public get filterTargets(): string[] {
      return FilterTarget.list.filter((value: string) => value !== FilterTarget.Unknown);
    }

    public get filterActions(): string[] {
      return FilterAction.list.filter((value: string) => value !== FilterAction.Unknown);
    }

    public addFilter(): void {
      this.feed.filters.push(new FeedItemFilter());
    }

    public removeFilter(index: number): void {
      this.feed.filters.splice(index, 1);
    }

    public async saveFeed(): Promise<void> {
      if (!await this.isDataValidAsync()) {
        return;
      }

      this.$emit(this.EVENT_SAVE);
    }

    public cancelAdd(): void {
      this.$router.push("/");
    }

    private async isDataValidAsync(): Promise<boolean> {
      if (!this.feed.name) {
        alert("You haven't specified the feed name");
        return false;
      }

      if (!this.feed.url) {
        alert("You haven't specified the feed URL");
        return false;
      }

      for (let i: number = 0; i < this.feed.filters.length; i++) {
        const filter: FeedItemFilter = this.feed.filters[i];
        if (filter.action === FilterTarget.Unknown) {
          alert(`You haven't specified the target field for filter ${i + 1}`);
          return false;
        }

        if (filter.target === FilterAction.Unknown) {
          alert(`You haven't specified the validation action for filter ${i + 1}`);
          return false;
        }

        if (!filter.value) {
          alert(`You haven't specified the validation value for filter ${i + 1}`);
          return false;
        }
      }

      const feedResult: Feed | null = await fetchFeedDataAsync(this.feed);
      if (feedResult === null) {
        alert("This feed seems to be invalid or inexistent")
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
</style>

