import { dashboardDatabase } from "./dashboard.db";
import { feedsDatabase } from "./feeds.db";
import { userSettingsDatabase } from "./user-settings.db";

export function initializeDatabase(): void {
    userSettingsDatabase.initialize();
    feedsDatabase.initialize();
    dashboardDatabase.initialize();
}

export function disposeDatabase(): void {
    dashboardDatabase.dispose();
    feedsDatabase.dispose();
    userSettingsDatabase.dispose();
}
