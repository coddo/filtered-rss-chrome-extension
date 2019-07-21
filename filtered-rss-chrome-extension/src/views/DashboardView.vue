<template>
  <div id="feeds-list" v-if="items && items.length > 0">
    <div class="card" v-for="item in items" v-bind:key="item.title" @click="openLink(item.link)">
      <div class="card-body mr-auto">
        <h5 class="card-title">{{ item.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ item.date }}</h6>
        <p class="card-text">{{ item.feedName }}</p>
      </div>
    </div>
  </div>
  <div class="mt-5 text-white" v-else>
    <p>You have no feeds configured :(</p>
    <button class="btn btn-success">Add new feed</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { DashboardItem } from "../ts/types";
  import { getMockConfiguredFeeds } from "../ts/mocks";
  import { convertFeedsToDashboardItems } from "../ts/parser";
  import { fetchFeedsAsync, getLocalMockFeeds } from "../ts/fetcher";

  @Component({
    components: {
    }
  })
  export default class DashboardView extends Vue {
    public items!: DashboardItem[];

    constructor() {
      super();

      this.items = convertFeedsToDashboardItems(getLocalMockFeeds());
    }

    async mounted(): Promise<void> {
      // await fetchFeedsAsync(getMockConfiguredFeeds());
    }

    openLink(link: string): void {
      window.open(link);
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    cursor: pointer;
  }
</style>

