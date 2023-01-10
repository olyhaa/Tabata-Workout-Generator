import { Injectable } from '@angular/core';
import { BASE_EXERCISE_OBJ } from 'src/app/constants';
import { GeneratedInterval, PREPARE_INTERVAL, REST_INTERVAL, WORK_INTERVAL } from './types';

@Injectable({
  providedIn: 'root'
})
export class GenerateIntervalsService {

  constructor() { }

  getWorkInterval({ time = 30, description = "Work" }: { time?: number, description?: string }): GeneratedInterval {
    const workObj: GeneratedInterval = Object.assign({}, BASE_EXERCISE_OBJ);
    workObj.description = description;
    workObj.type = WORK_INTERVAL;
    workObj.time = time;

    return workObj;
  }

  getRestInterval({ time = 15, description = "Rest" }: { time?: number, description?: string }): GeneratedInterval {
    const restObj: GeneratedInterval = Object.assign({}, BASE_EXERCISE_OBJ);
    restObj.description = description;
    restObj.type = REST_INTERVAL;
    restObj.time = time;

    return restObj;
  }

  getPrepareInterval({ time = 60, description = "Prepare" }: { time?: number, description?: string }): GeneratedInterval {
    const prepareObj: GeneratedInterval = Object.assign({}, BASE_EXERCISE_OBJ);
    prepareObj.description = description;
    prepareObj.type = PREPARE_INTERVAL;
    prepareObj.time = time;

    return prepareObj;
  }
}

