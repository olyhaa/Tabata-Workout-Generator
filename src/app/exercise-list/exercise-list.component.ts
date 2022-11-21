import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../types';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit, AfterViewInit {
  @Input() exercises: Exercise[] = []
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  initialSelection = [];
  allowMultiSelect = true;
  @Input() selection: SelectionModel<Exercise> = new SelectionModel<Exercise>(this.allowMultiSelect, this.initialSelection);

  displayedColumns: string[] = ['select', 'name', 'equipment'];
  dataSource: any = undefined;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.exercises);
    // select all by default
    this.dataSource.data.forEach((row: Exercise) => this.selection.select(row));
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
