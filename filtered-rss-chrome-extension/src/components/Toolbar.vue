<template>
  <div class="d-flex p-1" id="toolbar">
    <button
      id="btn-refresh"
      class="btn btn-outline-success"
      title="Refresh data from live sources"
      @click="refresh()"
    >Refresh</button>
    <button
      id="btn-open-all"
      class="btn btn-outline-success ml-1"
      title="Open all the new items"
      @click="openAllNewItems()"
    >Open all new</button>

    <button
      id="btn-new-count"
      class="btn btn-outline-success ml-auto"
      title="Mark all as seen"
      @click="clearNotifications()"
    >{{ newCount }}</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { coreService } from "@/ts/core";
  import { dashboardDatabase } from "@/ts/database/dashboard.db";

  @Component({
    components: {
    }
  })
  export default class Toolbar extends Vue {
    public get newCount(): number {
      return dashboardDatabase.newItems.length;
    }

    public async refresh(): Promise<void> {
      await coreService.refreshDashboardCache();
    }

    public openAllNewItems(): void {
      for (const item of dashboardDatabase.newItems) {
        coreService.openItem(item);
      }
    }

    public clearNotifications(): void {
      for (const item of dashboardDatabase.newItems) {
        dashboardDatabase.markAsNotNew(item.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #toolbar {
    background-color: #4f575e;

    * {
      font-size: 0.7rem;
    }

    #btn-new-count {
      border-radius: 50%;
    }
  }
</style>
