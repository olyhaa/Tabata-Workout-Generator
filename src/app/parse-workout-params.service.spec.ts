import { TestBed } from '@angular/core/testing';
import { DEFAULT_PREPARE_TIME, DEFAULT_REST_TIME, DEFAULT_WORK_TIME } from './constants';

import { ParseWorkoutParamsService } from './parse-workout-params.service';

describe('ParseWorkoutParamsService', () => {
  let service: ParseWorkoutParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseWorkoutParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should parse exercise list", () => {
    const origParams = {
      title: "my title",
      numSets: 2,
      numCycles: 3,
      prepareTime: DEFAULT_PREPARE_TIME,
      workTime: DEFAULT_WORK_TIME,
      restTime: DEFAULT_REST_TIME,
      exerciseList: [
        {
          name: "exercise 1"
        },
        {
          name: "exercise 2"
        },
        {
          name: "exercise 3"
        },
        {
          name: "exercise 4"
        }
      ]
    }
    expect(service.parseParams(origParams).exerciseList.length).toBe(origParams.numSets);
  });
});
