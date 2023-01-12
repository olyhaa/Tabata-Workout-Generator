import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Exercise } from '../types';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<Exercise> = new MatTableDataSource<Exercise>([]);
  @Input() selection: SelectionModel<Exercise> = new SelectionModel<Exercise>(true, []);
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = ['select', 'name', 'equipment'];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: Exercise) => this.selection.select(row));
  }
}
