import { Component } from '@angular/core';
import { GenerateFileService } from '../generate-file.service';
import { GeneratedWorkout, WorkoutParams } from '../types';

@Component({
  selector: 'app-create-new-page',
  templateUrl: './create-new-page.component.html',
  styleUrls: ['./create-new-page.component.css']
})
export class CreateNewPageComponent {
  workout: GeneratedWorkout | {} | undefined
    = undefined

  constructor(private generateService: GenerateFileService) { }

  generateWorkout(workout: WorkoutParams) {
    console.log(workout)
    // TODO pick exercise list

    this.workout = this.generateService.generateExport(workout).workout
  }
}
