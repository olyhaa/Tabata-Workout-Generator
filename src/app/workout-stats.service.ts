import { Injectable } from '@angular/core';
import { PREPARE_INTERVAL, REST_INTERVAL, WORK_INTERVAL } from './constants';
import { CombinedInterval, GeneratedInterval, GeneratedWorkout } from './types';

@Injectable({
  providedIn: 'root'
})
export class WorkoutStatsService {

  constructor() { }

  getTotalTime(workout: GeneratedWorkout): string {
    let prepareTime = 0;
    let lastRestTime = 0;
    const numCycles = workout.intervalsSetsCount;
    const skipRepeatPrepare = workout.doNotRepeatFirstPrepareAndLastCoolDown;
    const skipLastRest = workout.skipLastRestInterval;

    const hasFirstPrepare = workout.intervals[0].type === PREPARE_INTERVAL;
    const hasLastRest = workout.intervals[workout.intervals.length - 1].type === REST_INTERVAL;

    const intervalsToSum = [...workout.intervals];

    // if we are skipping prepare repeats, don't include in summed interval calculations
    // but include the time in the total count
    if (skipRepeatPrepare && hasFirstPrepare) {
      prepareTime = intervalsToSum.shift()?.time || 0;
    }

    // include the last rest in the summed interval calculations
    // but manually remove the time once
    if (skipLastRest && hasLastRest) {
      lastRestTime = workout.intervals[workout.intervals.length - 1].time;
    }

    const cycleTime = intervalsToSum.reduce((result: number, interval: GeneratedInterval) => {
      return result + interval.time;
    }, 0);

    const totalTime = cycleTime * numCycles + prepareTime - lastRestTime;

    return this.getTime(totalTime);
  }

  getTime(time: number): string {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  extractIntervals(workout: GeneratedWorkout): CombinedInterval[] {
    const newIntervals: CombinedInterval[] = [];

    if (workout.intervals) {
      for (let i = 0; i < workout.intervals.length; i++) {
        const interval: GeneratedInterval = workout.intervals[i];
        const nextInterval: GeneratedInterval = workout.intervals?.[i + 1];
        if (interval.type === WORK_INTERVAL) {
          const restTime = nextInterval?.type === REST_INTERVAL ? nextInterval.time : 0;
          newIntervals.push({
            description: interval?.description,
            work: interval?.time,
            workTime: this.getTime(interval?.time),
            rest: restTime,
            restTime: this.getTime(restTime)
          });
        }
      }
    }
    return newIntervals;
  }
}
