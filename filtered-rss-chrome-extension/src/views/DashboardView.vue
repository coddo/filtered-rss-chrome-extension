<template>
  <loading-dashboard-placeholder v-if="isLoading"></loading-dashboard-placeholder>

  <div id="feeds-list" v-else-if="items && items.length > 0">
    <div
      class="card"
      v-for="item in items"
      :key="item.feedName + item.title"
    >
      <div class="card-body mr-auto d-inline-flex p-0">
        <div class="notification-sidebar" :title="item.link" @click="openItem(item)" v-if="!item.isNew"></div>
        <div class="notification-sidebar bg-success" title="Mark as seen" @click="markItemAsNotNew(item.id)" v-else></div>

        <div class="p-3" :title="item.link" @click="openItem(item)">
          <h5 class="card-title">{{ item.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ item.date }}</h6>

          <div class="d-flex">
            <img class="feed-icon mr-2" :src="feedFaviconUrl(item.feedName)" alt="favicon" />
            <p class="card-text">{{ item.feedName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <no-feeds-message v-else-if="!feeds || feeds.length === 0"></no-feeds-message>
  <no-new-items-message v-else></no-new-items-message>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { DashboardItem, FeedSettings } from "@/ts/types";
  import { convertFeedsToDashboardItems } from "@/ts/converters";
  import { fetchFeedsAsync } from "@/ts/fetcher";
  import { feedsDatabase } from "@/ts/database/feeds.db";
  import NoFeedsMessage from "@/components/NoFeedsMessage.vue";
  import NoNewItemsMessage from "@/components/NoNewItemsMessage.vue";
  import LoadingDashboardPlaceholder from "@/components/LoadingDashboardPlaceholder.vue";
  import { dashboardDatabase } from "@/ts/database/dashboard.db";
  import { coreService } from "@/ts/core";
  import Badge from "@/ts/badge";

  @Component({
    components: {
      LoadingDashboardPlaceholder,
      NoFeedsMessage,
      NoNewItemsMessage,
    }
  })
  export default class DashboardView extends Vue {
    public get isLoading(): boolean {
      return coreService.isDataLoading;
    }

    public get feeds(): FeedSettings[] {
      return feedsDatabase.data;
    }

    public get items(): DashboardItem[] {
      return dashboardDatabase.data;
    }

    public openItem(item: DashboardItem): void {
      coreService.openItem(item);
    }

    public markItemAsNotNew(itemId: string): void {
      dashboardDatabase.markAsNotNew(itemId);
      Badge.updatedBadge();
    }

    public feedFaviconUrl(feedName: string): string {
      const feed: FeedSettings | undefined = feedsDatabase.data.find((f: FeedSettings) => f.name === feedName);
      if (!feed) {
        return "";
      }

      return `https://www.google.com/s2/favicons?domain_url=${feed.linkHost}`;
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 0;
    cursor: pointer;

    .card-body {
      .notification-sidebar {
        width: 100%;
        min-width: 10px;
        max-width: 10px;

        &.bg-success:hover {
          transition: transform 0.3s ease-out;
          transform: scaleX(3);
        }

        &.bg-success:not(hover) {
          transition: transform 0.3s ease-out;
          transform: scaleX(1);
        }
      }

      .feed-icon {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>

