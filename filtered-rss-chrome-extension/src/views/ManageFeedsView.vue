<template>
  <div id="feeds-list" v-if="configuredFeeds && configuredFeeds.length > 0">
    <p>ABC</p>
    <div
      class="card"
      v-for="feed in configuredFeeds"
      v-bind:key="feed.title"
      @click="openLink(item.link)"
    >
      <div class="card-body mr-auto">
        <h5 class="card-title">{{ feed.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ feed.url }}</h6>
      </div>
    </div>
  </div>
  <div class="mt-5 text-white text-center" v-else>
    <no-feeds-message></no-feeds-message>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { FeedSettings } from "@/ts/types";
  import { feedsDatabase } from "@/ts/database/feeds.db";
  import NoFeedsMessage from "@/components/NoFeedsMessage.vue";

  @Component({
    components: {
      NoFeedsMessage
    }
  })
  export default class ManageFeedsView extends Vue {
    private configuredFeeds: FeedSettings[];

    constructor() {
      super();

      this.configuredFeeds = feedsDatabase.getConfiguredFeeds();
    }
  }
</script>

<style lang="scss" scoped>
</style>

