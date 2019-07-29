<template>
  <loading-dashboard-placeholder v-if="isLoading"></loading-dashboard-placeholder>

  <div id="feeds-list" v-else-if="items && items.length > 0">
    <div
      class="card"
      v-for="item in items"
      :key="item.feedName + item.title"
      :title="item.link"
      @click="openItem(item)"
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
  }
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 0;
    cursor: pointer;

    .card-body {
      .notification-sidebar {
        min-width: 10px;
        max-width: 10px;
      }
    }
  }
</style>

