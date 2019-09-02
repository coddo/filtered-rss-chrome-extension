interface IBackgroundTimer {
    start(instantExecute?: boolean): void;
    stop(): void;
}