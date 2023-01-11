import { Component } from '@angular/core';
import { GenerateFileService } from '../generate-file.service';
import { ParseWorkoutParamsService } from '../parse-workout-params.service';
import { GeneratedWorkout, WorkoutParams } from '../types';

@Component({
  selector: 'app-create-new-page',
  templateUrl: './create-new-page.component.html',
  styleUrls: ['./create-new-page.component.css']
})
export class CreateNewPageComponent {
  workout?: GeneratedWorkout;

  constructor(private generateService: GenerateFileService, private parseService: ParseWorkoutParamsService) { }

  generateWorkout(workout: WorkoutParams) {
    const parsedParams = this.parseService.parseParams(workout);
    console.log(`Creating workout with params: ${JSON.stringify(parsedParams)}`)
    this.workout = this.generateService.generateExport(parsedParams).workout
  }
}
