import { userSettingsDatabase } from "./database/user-settings.db";
import { feedsDatabase } from "./database/feeds.db";

class ConfigMigrationService {
    public exportSettingsAndFeeds(): void {
        const fileContent: string = this.getFileContent();

        const element: HTMLAnchorElement = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent));
        element.setAttribute("download", "fi-rss-config.json");
        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    public importSettingsAndFeeds(callback: (success: boolean) => void): void {
        const input: HTMLInputElement = document.createElement("input");
        input.type = "file";
        input.onchange = (e: Event) => this.importFileAcceptedEvent(e, callback);

        input.click();
    }

    private importFileAcceptedEvent(e: Event, callback: (success: boolean) => void): void {
        const inputElement: HTMLInputElement = e.target as HTMLInputElement;
        if (!inputElement || !inputElement.files || inputElement.files.length === 0) {
            callback(false);
            return;
        }

        const file: File | null = inputElement.files.item(0);
        if (!file) {
            callback(false);
            return;
        }

        const reader: FileReader = new FileReader();

        reader.onload = (e: ProgressEvent) => {
            if (!reader.result) {
                callback(false);
                return;
            }

            try {
                const jsonData: any = JSON.parse(reader.result.toString());
                if (!jsonData) {
                    callback(false);
                    return;
                }

                if (jsonData.feeds) {
                    feedsDatabase.rawData = jsonData.feeds;
                }

                if (jsonData.settings) {
                    userSettingsDatabase.rawData = jsonData.settings;
                }

                callback(true);
            } catch {
                callback(false);
            }
        };

        reader.readAsText(file);
    }

    private getFileContent(): string {
        return JSON.stringify({
            feeds: feedsDatabase.data,
            settings: userSettingsDatabase.data
        });
    }
}

export const configMigrationService: ConfigMigrationService = new ConfigMigrationService();
