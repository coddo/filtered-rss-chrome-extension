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
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { UserSettings, userSettingsDatabase } from "@/ts/database/user-settings.db";

  @Component({
    components: {
    }
  })
  export default class UserSettingsView extends Vue {
    public readonly acceptedUpdateIntervals: number[] = [1, 2, 3, 5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 90, 105, 120];

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
  }
</script>

<style lang="scss" scoped>
</style>

