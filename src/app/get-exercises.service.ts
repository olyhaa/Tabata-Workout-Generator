import { Injectable } from '@angular/core';
import exercisesInput from "../data/exercises.json";
import { Exercise } from './types';

@Injectable({
  providedIn: 'root'
})
export class GetExercisesService {

  constructor() { }

  getList(): Exercise[] {
    return exercisesInput;
  }
}
