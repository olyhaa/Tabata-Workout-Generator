import { Component, EventEmitter, Output } from '@angular/core';
import { Exercise, WorkoutParams } from '../types';
import { SelectionModel } from '@angular/cdk/collections';
import exercisesInput from "../../data/exercises.json";
import { DEFAULT_NUM_CYCLES, DEFAULT_NUM_SETS, DEFAULT_PREPARE_TIME, DEFAULT_REST_TIME, DEFAULT_WORK_TIME } from '../constants';

@Component({
  selector: 'app-workout-params',
  templateUrl: './workout-params.component.html',
  styleUrls: ['./workout-params.component.css']
})
export class WorkoutParamsComponent {
  @Output() newParamsEvent = new EventEmitter<WorkoutParams>;
  exerciseList = exercisesInput;

  title: string = "";
  numSets: number = DEFAULT_NUM_SETS;
  numCycles: number = DEFAULT_NUM_CYCLES;

  prepareTime: number = DEFAULT_PREPARE_TIME;
  workTime: number = DEFAULT_WORK_TIME;
  restTime: number = DEFAULT_REST_TIME;

  initialSelection = [];
  selection = new SelectionModel<Exercise>(true, this.initialSelection);

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
