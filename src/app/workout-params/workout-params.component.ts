import { Component } from '@angular/core';
import { Exercise } from '../types';
import { SelectionModel } from '@angular/cdk/collections';
import exercisesInput from "../../data/exercises.json";

@Component({
  selector: 'app-workout-params',
  templateUrl: './workout-params.component.html',
  styleUrls: ['./workout-params.component.css']
})
export class WorkoutParamsComponent {
  exerciseList = exercisesInput;

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<Exercise>(this.allowMultiSelect, this.initialSelection);
}
