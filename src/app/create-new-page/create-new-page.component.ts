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
  workout?: GeneratedWorkout;
  workoutJsonUrl: SafeUrl = "";
  workoutName: string = "";

  constructor(private generateService: GenerateFileService, private parseService: ParseWorkoutParamsService, private sanitizer: DomSanitizer) { }

  generateWorkout(workout: WorkoutParams) {
    const parsedParams = this.parseService.parseParams(workout);
    const generatedExport: GeneratedExport = this.generateService.generateExport(parsedParams);
    this.workout = generatedExport.workout;
    this.workoutName = parsedParams.title;
    this.workoutJsonUrl = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(generatedExport)));
  }
}
