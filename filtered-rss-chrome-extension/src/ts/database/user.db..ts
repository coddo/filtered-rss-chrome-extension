// storage keys
const KEY_USER_SETTINGS: string = "user-settings";

// database class
class UserSettingsDatabase {
    public get(): UserSettings {
        const settingsValue: string | null = localStorage.getItem(KEY_USER_SETTINGS);

        if (settingsValue !== null) {
            return JSON.parse(settingsValue) as UserSettings;
        }

        const settings: UserSettings = new UserSettings();
        localStorage.setItem(KEY_USER_SETTINGS, JSON.stringify(settings));

        return settings;
    }

    public update(settings: UserSettings): void {
        localStorage.setItem(KEY_USER_SETTINGS, JSON.stringify(settings));
    }
}

// data access layer singleton variable that is used everywhere
export const userSettingsDatabase: UserSettingsDatabase = new UserSettingsDatabase();

// models for managed by DAL only
export class UserSettings {
    public notificationPopup: boolean = false;
    public notificationSound: boolean = false;
    public refreshIntervalMinutes: number = 5;
}