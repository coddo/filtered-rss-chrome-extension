<template>
  <div class="mt-3 container-fluid">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        aria-label="Text input with checkbox"
        value="Notification popup"
        disabled
      />
      <div class="input-group-append">
        <div class="input-group-text">
          <input type="checkbox" v-model="userSettings.notificationPopup" @change="saveChanges()" />
        </div>
      </div>
    </div>

    <div class="input-group mt-3" v-if="userSettings.notificationPopup">
      <input
        type="text"
        class="form-control"
        aria-label="Text input with checkbox"
        value="Notification sound"
        disabled
      />
      <div class="input-group-append">
        <div class="input-group-text">
          <input type="checkbox" v-model="userSettings.notificationSound" @change="saveChanges()" />
        </div>
      </div>
    </div>

    <div class="input-group mt-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="dd-update-interval">Update interval (minutes)</label>
      </div>
      <select
        id="dd-update-interval"
        class="custom-select"
        v-model="userSettings.refreshIntervalMinutes"
        @change="saveChanges()"
      >
        <option
          v-for="acceptedValue in acceptedUpdateIntervals"
          :key="acceptedValue"
          :value="acceptedValue"
        >{{ acceptedValue }}</option>
      </select>
    </div>

    <div class="mt-3 container-fluid bg-dark py-1 px-0 mx-0"></div>
    <h4 class="text-white mt-3">Import and export settings and feeds</h4>

    <div class="mt-3 d-flex">
      <button class="btn btn-success ml-auto mr-2" @click="exportConfiguration()">Export</button>
      <button class="btn btn-success mr-auto" @click="importConfiguration()">Import</button>
    </div>

    <div
      class="alert alert-success mt-3"
      v-if="showDialog === 1"
    >Successfully imported settings and feeds!</div>
    <div class="alert alert-danger mt-3" v-if="showDialog === 2">Error importing settings and feeds!</div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { UserSettings, userSettingsDatabase } from "@/ts/database/user-settings.db";
  import { configMigrationService } from "@/ts/config-migration";
import { coreService } from '../ts/core';

  @Component({
    components: {
    }
  })
  export default class UserSettingsView extends Vue {
    private timeoutHandle: number = 0;

    public readonly acceptedUpdateIntervals: number[] = [1, 2, 3, 5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 90, 105, 120];
    public showDialog: number = 0;

    constructor() {
      super();
    }

    public get userSettings(): UserSettings {
      return userSettingsDatabase.data;
    }

    public get showSoundOption(): boolean {
      return userSettingsDatabase.data.notificationPopup;
    }

    public saveChanges(): void {
      const userSettings: UserSettings = this.userSettings;

      userSettingsDatabase.data = {
        notificationPopup: userSettings.notificationPopup,
        notificationSound: userSettings.notificationSound,
        refreshIntervalMinutes: userSettings.refreshIntervalMinutes,
      } as UserSettings;
    }

    public exportConfiguration(): void {
      configMigrationService.exportSettingsAndFeeds();
    }

    public importConfiguration(): void {
      configMigrationService.importSettingsAndFeeds(this.importConfigurationCallback);
    }

    public importConfigurationCallback(success: boolean): void {
      this.showDialog = success ? 1 : 2;

      this.timeoutHandle = setTimeout(() => {
        this.showDialog = 0;

        clearTimeout(this.timeoutHandle);
        this.timeoutHandle = 0;
      }, 5000);

      if (success) {
        coreService.refreshDashboardCache();
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

