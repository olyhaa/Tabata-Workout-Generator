import { Injectable } from '@angular/core';
import { BASE_EXERCISE_OBJ, DEFAULT_PREPARE_TIME, DEFAULT_REST_TIME, DEFAULT_WORK_TIME, PREPARE_INTERVAL, REST_INTERVAL, WORK_INTERVAL } from 'src/app/constants';
import { GeneratedInterval } from './types';

@Injectable({
  providedIn: 'root'
})
export class GenerateIntervalsService {

  constructor() { }

  getWorkInterval({ time = DEFAULT_WORK_TIME, description = "Work" }: { time?: number, description?: string }): GeneratedInterval {
    const workObj: GeneratedInterval = Object.assign({}, BASE_EXERCISE_OBJ);
    workObj.description = description;
    workObj.type = WORK_INTERVAL;
    workObj.time = time;

    return workObj;
  }

  getRestInterval({ time = DEFAULT_REST_TIME, description = "Rest" }: { time?: number, description?: string }): GeneratedInterval {
    const restObj: GeneratedInterval = Object.assign({}, BASE_EXERCISE_OBJ);
    restObj.description = description;
    restObj.type = REST_INTERVAL;
    restObj.time = time;

    return restObj;
  }

  getPrepareInterval({ time = DEFAULT_PREPARE_TIME, description = "Prepare" }: { time?: number, description?: string }): GeneratedInterval {
    const prepareObj: GeneratedInterval = Object.assign({}, BASE_EXERCISE_OBJ);
    prepareObj.description = description;
    prepareObj.type = PREPARE_INTERVAL;
    prepareObj.time = time;

    return prepareObj;
  }
}

