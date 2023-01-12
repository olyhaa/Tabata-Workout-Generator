import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutParamsComponent } from './workout-params.component';

describe('WorkoutParamsComponent', () => {
  let component: WorkoutParamsComponent;
  let fixture: ComponentFixture<WorkoutParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutParamsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorkoutParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
