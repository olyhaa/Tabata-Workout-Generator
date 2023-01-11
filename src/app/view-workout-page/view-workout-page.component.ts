import { Component } from '@angular/core';
import { GeneratedWorkout } from '../types';

@Component({
  selector: 'app-view-workout-page',
  templateUrl: './view-workout-page.component.html',
  styleUrls: ['./view-workout-page.component.css']
})
export class ViewWorkoutPageComponent {
  workout?: GeneratedWorkout;

  jsonInputChange(fileInputEvent: any) {
    const file = fileInputEvent.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = () => {
      this.workout = JSON.parse(fileReader.result as string);
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }
}
