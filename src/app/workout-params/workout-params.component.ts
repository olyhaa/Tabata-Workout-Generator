import { Component } from '@angular/core';
import exercisesInput from "../../data/exercises.json";

@Component({
  selector: 'app-workout-params',
  templateUrl: './workout-params.component.html',
  styleUrls: ['./workout-params.component.css']
})
export class WorkoutParamsComponent {
  exerciseList = exercisesInput;

}
