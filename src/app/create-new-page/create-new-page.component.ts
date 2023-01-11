import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GenerateFileService } from '../generate-file.service';
import { ParseWorkoutParamsService } from '../parse-workout-params.service';
import { GeneratedExport, GeneratedWorkout, WorkoutParams } from '../types';

@Component({
  selector: 'app-create-new-page',
  templateUrl: './create-new-page.component.html',
  styleUrls: ['./create-new-page.component.css']
})
export class CreateNewPageComponent {
  workout?: GeneratedExport;
  workoutJsonUrl: SafeUrl = "";

  constructor(private generateService: GenerateFileService, private parseService: ParseWorkoutParamsService, private sanitizer: DomSanitizer) { }

  generateWorkout(workout: WorkoutParams) {
    const parsedParams = this.parseService.parseParams(workout);
    console.log(`Creating workout with params: ${JSON.stringify(parsedParams)}`)
    this.workout = this.generateService.generateExport(parsedParams)
    this.workoutJsonUrl = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.workout)));
  }
}
