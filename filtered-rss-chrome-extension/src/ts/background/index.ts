import { IntervalBackgroundTimer } from "./interval-timer";
import { AlarmBackgroundTimer } from "./alarm-timer";

export const intervalBackgroundTimer: IBackgroundTimer = new IntervalBackgroundTimer();
export const alarmBackgroundTimer: IBackgroundTimer = new AlarmBackgroundTimer();