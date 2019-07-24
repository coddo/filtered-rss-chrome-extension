<template>
  <div id="feeds-list" v-if="items && items.length > 0">
    <div
      class="card"
      v-for="item in items"
      v-bind:key="item.feedName + item.title"
      @click="openLink(item.link)"
    >
      <div class="card-body mr-auto d-inline-flex p-0">
        <div class="notification-sidebar" :class="item.isNew ? 'bg-success' : ''"></div>
        <div class="p-3">
          <h5 class="card-title">{{ item.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ item.date }}</h6>
          <p class="card-text">{{ item.feedName }}</p>
        </div>
      </div>
    </div>
  </div>

  <loading-dashboard-placeholder v-else-if="isLoading"></loading-dashboard-placeholder>
  <no-feeds-message v-else-if="!feeds || feeds.length === 0"></no-feeds-message>
  <no-new-items-message v-else></no-new-items-message>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { DashboardItemViewModel, Feed, FeedSettings } from "../ts/types";
  import { convertFeedsToDashboardItems } from "@/ts/converters";
  import { fetchFeedsAsync } from "@/ts/fetcher";
  import { feedsDatabase } from "@/ts/database/feeds.db";
  import NoFeedsMessage from "@/components/NoFeedsMessage.vue";
  import NoNewItemsMessage from '@/components/NoNewItemsMessage.vue';
  import LoadingDashboardPlaceholder from '@/components/LoadingDashboardPlaceholder.vue';

  @Component({
    components: {
      NoFeedsMessage,
      NoNewItemsMessage,
      LoadingDashboardPlaceholder,
    }
  })
  export default class DashboardView extends Vue {
    private isLoading: boolean = false;
    private feeds: FeedSettings[];
    private items!: DashboardItemViewModel[];

    constructor() {
      super();

      this.feeds = feedsDatabase.getAll();
      this.items = [];
    }

    public async mounted(): Promise<void> {
      if (!this.feeds) {
        return;
      }

      try {
        this.isLoading = true;

        const parsedFeeds: Feed[] = await fetchFeedsAsync(this.feeds);
        this.items = convertFeedsToDashboardItems(parsedFeeds);
      } finally {
        this.isLoading = false;
      }
    }

    public openLink(link: string): void {
      window.open(link);
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    cursor: pointer;

    .card-body {
      .notification-sidebar {
        min-width: 10px;
        max-width: 10px;
      }
    }
  }
</style>

