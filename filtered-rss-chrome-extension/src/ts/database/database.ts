import Vue from "vue";

export abstract class Database<T> {
    protected readonly storageKey: string;
    protected readonly store: { data: T };

    public constructor(storageKey: string, initialData: T) {
        this.storageKey = storageKey;
        this.store = Vue.observable({
            data: initialData,
        });
    }

    public get data(): T {
        return this.store.data;
    }

    public set data(data: T) {
        if (!data) {
            return;
        }

        localStorage.setItem(this.storageKey, JSON.stringify(data));
        this.store.data = data;
    }

    public initialize(): void {
        window.addEventListener("storage", this.onStoredDataChanged);
        this.refreshStore();
    }

    public set rawData(rawData: any) {
        localStorage.setItem(this.storageKey, JSON.stringify(rawData));
        this.refreshStore();
    }

    public dispose(): void {
        window.removeEventListener("storage", this.onStoredDataChanged);
    }

    protected abstract refreshStore(): void;

    private readonly onStoredDataChanged = (event: StorageEvent): void => {
        if (this.storageKey === event.key) {
            this.refreshStore();
        }
    }
}
