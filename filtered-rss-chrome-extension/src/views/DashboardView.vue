<template>
  <div id="feeds-list" v-if="items && items.length > 0">
    <div class="card" v-for="item in items" v-bind:key="item.feedName + item.title" @click="openLink(item.link)">
      <div class="card-body mr-auto">
        <h5 class="card-title">{{ item.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ item.date }}</h6>
        <p class="card-text">{{ item.feedName }}</p>
      </div>
    </div>
  </div>
  <div class="mt-5 text-white text-center" v-else>
    <no-feeds-message></no-feeds-message>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { DashboardItemViewModel, Feed, FeedSettings } from "../ts/types";
  import { convertFeedsToDashboardItems } from "@/ts/converters";
  import { fetchFeedsAsync } from "@/ts/fetcher";
  import { feedsDatabase } from "@/ts/database/feeds.db";
  import NoFeedsMessage from "@/components/NoFeedsMessage.vue";

  @Component({
    components: {
      NoFeedsMessage
    }
  })
  export default class DashboardView extends Vue {
    public items!: DashboardItemViewModel[];

    constructor() {
      super();

      this.items = [];
    }

    async mounted(): Promise<void> {
      const configuredFeeds: FeedSettings[] = feedsDatabase.getAll();
      if (!configuredFeeds) {
        return;
      }

      const feeds: Feed[] = await fetchFeedsAsync(configuredFeeds);
      this.items = convertFeedsToDashboardItems(feeds);
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

