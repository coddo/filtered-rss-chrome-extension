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

    public set data(items: T) {
        if (!items) {
            return;
        }

        localStorage.setItem(this.storageKey, JSON.stringify(items));
    }

    public initialize(): void {
        window.addEventListener("storage", this.onStoredDataChanged);
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
