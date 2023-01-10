import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { getIntervalTypeDisplay } from '../constants';

@Component({
  selector: 'app-workout-table',
  templateUrl: './workout-table.component.html',
  styleUrls: ['./workout-table.component.css']
})
export class WorkoutTableComponent implements OnChanges {
  @Input() workout: any = []
  displayedColumns: string[] = ['index', 'description', 'workTime', 'restTime'];
  dataSource: any = undefined;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.workout);
  }

  getType(intervalType: number): string {
    return getIntervalTypeDisplay(intervalType)
  }
}
