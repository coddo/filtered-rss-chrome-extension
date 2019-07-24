<template>
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
        <input
          class="form-control mr-1"
          type="text"
          v-model="feed.filters[filterIndex].value"
          @keyup.enter="saveFeed()"
        />
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
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
  import { FeedSettings, FeedItemFilter } from "@/ts/types";
  import { FilterAction, FilterTarget } from "@/ts/filters";

  @Component({
    components: {
    }
  })
  export default class FeedFilters extends Vue {
    @Prop(FeedSettings)
    public feed!: FeedSettings;

    @Emit("save")
    public saveFeed(): void {
      // nothing to do
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
  }
</script>

<style lang="scss" scoped>
  #feed-filters {
    max-height: 250px;
    overflow-y: auto;
  }

  .img-btn-filter {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
</style>
