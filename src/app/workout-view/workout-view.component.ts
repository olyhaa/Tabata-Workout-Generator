import { Component, Input } from '@angular/core';
import { Interval } from '../types';
import { REST_INTERVAL, WORK_INTERVAL } from '../constants';

@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.css']
})
export class WorkoutViewComponent {
  private _workout = {};
  intervals: Interval[] = []
  totalIntervals: number = 0
  totalTime: number = 0
  restInterval: number = 0;

  @Input()
  get workout(): any { return this._workout; }
  set workout(workout: any) {
    this._workout = workout;
    this.intervals = this.extractIntervals(workout.intervals);
    this.totalTime = this.calculateTotalTime(workout.intervalsSetsCount, this.intervals)
  }

  // TODO does not take into account skipLastRestInterval or doNotRepeatFirstPrepareAndLastCoolDown
  calculateTotalTime(repeats: number, intervals: Interval[]) {
    let intervalTotal = 0;
    for (let i = 0; i < intervals.length; i++) {
      intervalTotal += intervals[i]?.work || 0;
      intervalTotal += intervals[i]?.rest || 0;
    }
    return intervalTotal * repeats;
  }

  getTime(time: number): string {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  extractIntervals(intervals: any[]): Interval[] {
    const newIntervals: Interval[] = [];

    if (intervals) {
      for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const nextInterval = intervals?.[i + 1];
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
