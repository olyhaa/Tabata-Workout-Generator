import { Injectable } from '@angular/core';
import { BASE_WORKOUT_OBJ, DEFAULT_NUM_CYCLES, GREEN_COLOR } from 'src/app/constants';
import { GenerateIntervalsService } from './generate-intervals.service';
import { Exercise, GeneratedInterval, GeneratedWorkout } from './types';

@Injectable({
  providedIn: 'root'
})
export class GenerateWorkoutService {

  constructor(private intervalService: GenerateIntervalsService) { }

  getWorkout({
    id = -1,
    title = "New Workout",
    colorId = GREEN_COLOR,
    numCycles = DEFAULT_NUM_CYCLES,
    exerciseList = [],
  }: { id?: number, title?: string, colorId?: number, numSets?: number, numCycles?: number, exerciseList?: Exercise[] }) {
    const workoutObj: GeneratedWorkout = Object.assign({}, BASE_WORKOUT_OBJ);
    workoutObj.colorId = colorId;
    workoutObj.id = id;
    workoutObj.intervals = this.getWorkoutIntervals({ exerciseList });
    workoutObj.intervalsSetsCount = numCycles;
    workoutObj.title = title;

    return workoutObj;
  }

  getWorkoutIntervals({ exerciseList }: { exerciseList: Exercise[] }): GeneratedInterval[] {
    const newList: GeneratedInterval[] = [];

    // add prepare at the start
    if (exerciseList.length > 0) {
      newList.push(this.intervalService.getPrepareInterval({}));
    }

    // add each interval
    return newList.concat(
      exerciseList.reduce((res: GeneratedInterval[], current: Exercise) => {
        const newItems: GeneratedInterval[] = [];
        if (current.leftAndRight) {
          newItems.push(
            this.intervalService.getWorkInterval({ description: `${current.name}, left` })
          );
          newItems.push(
            this.intervalService.getWorkInterval({ description: `${current.name}, right` })
          );
        } else {
          newItems.push(this.intervalService.getWorkInterval({ description: current.name }));
        }
        newItems.push(this.intervalService.getRestInterval({}));

        const newResult = res.concat(newItems);
        return newResult;
      }, [])
    );
  }
}

