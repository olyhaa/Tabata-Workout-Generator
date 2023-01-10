import { Injectable } from '@angular/core';
import { BASE_FILE_OBJ } from 'src/app/constants';
import { GenerateWorkoutService } from './generate-workout.service';
import { GeneratedExport, WorkoutParams } from './types';

@Injectable({
  providedIn: 'root'
})
export class GenerateFileService {

  constructor(private workoutService: GenerateWorkoutService) { }

  generateExport(params: WorkoutParams): GeneratedExport {
    const exportObj: GeneratedExport = Object.assign({}, BASE_FILE_OBJ);
    exportObj.workout = this.workoutService.getWorkout(params);

    return exportObj;
  };

}
