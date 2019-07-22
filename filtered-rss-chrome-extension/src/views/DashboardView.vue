<template>
  <div id="feeds-list" v-if="items && items.length > 0">
    <div
      class="card"
      v-for="item in items"
      v-bind:key="item.feedName + item.title"
      @click="openLink(item.link)"
    >
      <div class="card-body mr-auto">
        <h5 class="card-title">{{ item.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ item.date }}</h6>
        <p class="card-text">{{ item.feedName }}</p>
      </div>
    </div>
  </div>
  <div class="mt-5 text-center" v-else-if="isLoading">
    <img id="loading-spinner" src="@/static/loading.gif" alt="plop-plop" />
  </div>
  <div class="mt-5 text-white text-center" v-else-if="!feeds || feeds.length === 0">
    <no-feeds-message></no-feeds-message>
  </div>
  <div class="mt-5 text-white text-center" v-else>
    <div class="container-fluid mb-5">
      <p class="d-inline mr-2">There's nothing new on your feed</p>
      <img id="img-sad-face" src="@/static/sad-face.png" alt="sad-face" />
    </div>
    <img id="img-lemons" class="mt-5 text-center" src="@/static/lemons.png" alt />
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
    private isLoading: boolean = false;
    private feeds: FeedSettings[];
    private items!: DashboardItemViewModel[];

    constructor() {
      super();

      this.feeds = feedsDatabase.getAll();
      this.items = [];
    }

    async mounted(): Promise<void> {
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

    openLink(link: string): void {
      window.open(link);
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    cursor: pointer;
  }

  #loading-spinner {
    width: 48px;
    height: 48px;
  }

  #img-lemons {
    width: 128px;
    height: 128px;
  }

  #img-sad-face {
    width: 24px;
    height: 24px;
  }
</style>

