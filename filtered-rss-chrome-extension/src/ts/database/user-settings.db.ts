import { Database } from "./database";

// database class
class UserSettingsDatabase extends Database<UserSettings> {
    public constructor() {
        super("user-settings", {} as UserSettings);
    }

    public refreshStore(): void {
        const settingsValue: string | null = localStorage.getItem(this.storageKey);

        if (settingsValue !== null) {
            const settingsJson: any = JSON.parse(settingsValue);

            this.data.notificationPopup = settingsJson.notificationPopup;
            this.data.notificationSound = settingsJson.notificationSound;
            this.data.refreshIntervalMinutes = settingsJson.refreshIntervalMinutes;
        }
    }
}

// data access layer singleton variable that is used everywhere
export const userSettingsDatabase: UserSettingsDatabase = new UserSettingsDatabase();

// models for managed by DAL only
export class UserSettings {
    public notificationPopup: boolean = true;
    public notificationSound: boolean = true;
    public refreshIntervalMinutes: number = 5;
}
