<template>
  <div id="feed-editor">
    <div id="feed-details" class="mt-3 mx-3 p-3 bg-white">
      <h3>Details</h3>
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
      <h3>Filters</h3>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { FeedSettings } from "@/ts/types";

  @Component({
    components: {
    }
  })
  export default class FeedDetails extends Vue {
    public feed: FeedSettings;

    constructor() {
      super();

      this.feed = new FeedSettings();
    }
  }
</script>

<style lang="scss" scoped>
  .input-group .input-group-prepend .input-group-text {
    width: 60px;
  }
</style>

