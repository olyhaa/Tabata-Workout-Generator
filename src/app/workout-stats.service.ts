import { Injectable } from '@angular/core';
import { REST_INTERVAL, WORK_INTERVAL } from './constants';
import { CombinedInterval, GeneratedInterval, GeneratedWorkout } from './types';

@Injectable({
  providedIn: 'root'
})
export class WorkoutStatsService {

  constructor() { }

  getTotalTime(workout: GeneratedWorkout): string {
    const totalTime = workout.intervals.reduce((result: number, interval: GeneratedInterval) => {
      return result + interval.time;
    }, 0);
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
