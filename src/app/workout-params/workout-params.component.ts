import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Exercise, WorkoutParams } from '../types';
import { SelectionModel } from '@angular/cdk/collections';
import { DEFAULT_NUM_CYCLES, DEFAULT_NUM_SETS, DEFAULT_PREPARE_TIME, DEFAULT_REST_TIME, DEFAULT_WORK_TIME } from '../constants';
import { GetExercisesService } from '../get-exercises.service';

@Component({
  selector: 'app-workout-params',
  templateUrl: './workout-params.component.html',
  styleUrls: ['./workout-params.component.css']
})
export class WorkoutParamsComponent implements OnInit {
  @Output() newParamsEvent = new EventEmitter<WorkoutParams>;
  exerciseList: Exercise[] = [];

  title: string = "";
  numSets: number = DEFAULT_NUM_SETS;
  numCycles: number = DEFAULT_NUM_CYCLES;

  prepareTime: number = DEFAULT_PREPARE_TIME;
  workTime: number = DEFAULT_WORK_TIME;
  restTime: number = DEFAULT_REST_TIME;

  initialSelection = [];
  selection = new SelectionModel<Exercise>(true, this.initialSelection);

  constructor(private exerciseService: GetExercisesService) { }

  ngOnInit() {
    this.exerciseList = this.exerciseService.getList();
  }

  getParams() {
    const newParams: WorkoutParams = {
      title: this.title,
      numSets: this.numSets,
      numCycles: this.numCycles,
      prepareTime: this.prepareTime,
      workTime: this.workTime,
      restTime: this.restTime,
      exerciseList: this.selection.selected
    }
    this.newParamsEvent.emit(newParams);
  }
}
