import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  workoutForm = new FormGroup({
    title: new FormControl(""),
    numSets: new FormControl(DEFAULT_NUM_SETS),
    numCycles: new FormControl(DEFAULT_NUM_CYCLES),
    prepareTime: new FormControl(DEFAULT_PREPARE_TIME),
    workTime: new FormControl(DEFAULT_WORK_TIME),
    restTime: new FormControl(DEFAULT_REST_TIME)
  });

  initialSelection = [];
  selection = new SelectionModel<Exercise>(true, this.initialSelection);

  constructor(private exerciseService: GetExercisesService) { }

  ngOnInit() {
    this.exerciseList = this.exerciseService.getList();
  }

  getParams() {
    const newParams: WorkoutParams = {
      title: this.workoutForm.value.title || "",
      numSets: this.workoutForm.value.numSets || DEFAULT_NUM_SETS,
      numCycles: this.workoutForm.value.numCycles || DEFAULT_NUM_CYCLES,
      prepareTime: this.workoutForm.value.prepareTime || DEFAULT_PREPARE_TIME,
      workTime: this.workoutForm.value.workTime || DEFAULT_WORK_TIME,
      restTime: this.workoutForm.value.restTime || DEFAULT_REST_TIME,
      exerciseList: this.selection.selected
    }
    this.newParamsEvent.emit(newParams);
  }
}
