import { Injectable } from '@angular/core';
import { Exercise, WorkoutParams } from './types';

@Injectable({
  providedIn: 'root'
})
export class ParseWorkoutParamsService {

  constructor() { }

  parseParams(allParams: WorkoutParams): WorkoutParams {
    const { numSets, exerciseList } = allParams;

    // choose exercises to be in list
    const exerciseSubset: Exercise[] = this.getItems(exerciseList, numSets);

    // shuffle exercises
    const parsedExerciseList: Exercise[] = this.getShuffledList(exerciseSubset);

    return { ...allParams, exerciseList: parsedExerciseList };
  }

  getItems(list: Exercise[], numItems: number) {
    const shuffled = this.getShuffledList(list);
    return shuffled.slice(0, numItems);
  }

  getShuffledList(list: Exercise[]) {
    return [...list].sort(() => 0.5 - Math.random());
  }
}
