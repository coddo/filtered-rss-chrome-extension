<template>
  <div id="feed-details2" class="mx-3 p-3 bg-white">
    <div class="d-flex mb-2">
      <h3 class="pt-1">Details</h3>
      <img
        id="loading-spinner"
        class="ml-1"
        src="@/static/loading.gif"
        alt="plop-plop"
        v-if="isLoading"
      />
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
        @keyup.enter="saveFeed()"
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
        @keyup.enter="saveFeed()"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit } from "vue-property-decorator";
  import { FeedSettings } from "../ts/types";

  @Component({
    components: {
    }
  })
  export default class FeedDetails extends Vue {
    @Prop(FeedSettings)
    public feed!: FeedSettings;

    @Prop(Boolean)
    public isLoading: boolean = false;

    @Emit("save")
    public saveFeed(): void {
      // nothing to do
    }
  }
</script>

<style lang="scss" scoped>
  .input-group .input-group-prepend .input-group-text {
    width: 60px;
  }

  #loading-spinner {
    width: 36px;
    height: 36px;
  }
</style>


