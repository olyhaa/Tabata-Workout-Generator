import { TestBed } from '@angular/core/testing';

import { GetExercisesService } from './get-exercises.service';

describe('GetExercisesService', () => {
  let service: GetExercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should should return a list', () => {
    expect(service.getList().length).toBeGreaterThan(0);
  });
});
