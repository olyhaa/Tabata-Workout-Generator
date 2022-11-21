import { Component } from '@angular/core';
import core8 from "../../../scratch/Core8.workout.json";
import strength from "../../../scratch/Strength.workout.json";
import glutes from "../../../scratch/Glutes.workout.json";
import ballAndPlank from "../../../scratch/BallAndPlank.workout.json";

type WorkoutItem = {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-view-workout-page',
  templateUrl: './view-workout-page.component.html',
  styleUrls: ['./view-workout-page.component.css']
})
export class ViewWorkoutPageComponent {
  workout = core8.workout;
  selected: string = "core8"


  workouts: WorkoutItem[] = [
    {
      value: "core8", viewValue: 'Core #8'
    },
    {
      value: 'glutes', viewValue: 'Mini-Band Glutes'
    },
    { value: 'strength', viewValue: 'Strength' },
    { value: 'ballAndPlank', viewValue: "Ball and Plank" }
  ];

  switchWorkout(value: string) {
    if (value === "core8") {
      this.workout = core8.workout;
    }
    if (value === "glutes") {
      this.workout = glutes.workout;
    }
    if (value === "strength") {
      this.workout = strength.workout;
    }
    if (value === "ballAndPlank") {
      this.workout = ballAndPlank.workout;
    }
  }
}
