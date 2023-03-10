import { Component, Input, OnChanges } from '@angular/core';
import { GeneratedWorkout, CombinedInterval } from '../types';
import { WorkoutStatsService } from '../workout-stats.service';

@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.css']
})
export class WorkoutViewComponent implements OnChanges {
  @Input() workout?: GeneratedWorkout;
  totalTime?: string;
  intervals: CombinedInterval[] = [];

  constructor(private workoutStatsService: WorkoutStatsService) { }

  ngOnChanges(): void {
    if (this.workout) {
      this.totalTime = this.workoutStatsService.getTotalTime(this.workout);
      this.intervals = this.workoutStatsService.extractIntervals(this.workout);
    }
  }
}
