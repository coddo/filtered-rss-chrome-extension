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

    <div class="input-group mt-3">
      <input
        type="text"
        class="form-control"
        aria-label="Text input with checkbox"
        value="Notification popup"
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

  <!-- <div class="form-group text-white">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="cb-notif-popup"
        v-model="userSettings.notificationPopup"
        @change="saveChanges()"
      />
      <label class="form-check-label pt-1" for="cb-notif-popup">Notification popup</label>
    </div>

    <div class="form-check mt-3">
      <input
        class="form-check-input"
        type="checkbox"
        id="cb-notif-sound"
        v-model="userSettings.notificationSound"
        @change="saveChanges()"
      />
      <label class="form-check-label pt-1" for="cb-notif-sound">Notification sound</label>
    </div>

    <div class="form-group mt-3">
      <label for="dd-update-interval">Update interval (minutes):</label>
      <select id="dd-update-interval" class="text-center ml-2" v-model="userSettings.refreshIntervalMinutes" @change="saveChanges()">
        <option
          v-for="acceptedValue in acceptedUpdateIntervals"
          :key="acceptedValue"
          :value="acceptedValue"
        >{{ acceptedValue }}</option>
      </select>
    </div>
  </div>-->
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { UserSettings, userSettingsDatabase } from "@/ts/database/user.db";

  @Component({
    components: {
    }
  })
  export default class UserSettingsView extends Vue {
    public readonly acceptedUpdateIntervals: number[] = [1, 2, 3, 5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 90, 105, 120];

    public userSettings!: UserSettings;

    constructor() {
      super();
      this.userSettings = userSettingsDatabase.get();
    }

    saveChanges(): void {
      userSettingsDatabase.update(this.userSettings);
    }
  }
</script>

<style lang="scss" scoped>
</style>

