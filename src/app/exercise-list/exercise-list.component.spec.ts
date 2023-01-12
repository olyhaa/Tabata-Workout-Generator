import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListComponent } from './exercise-list.component';

describe('ExerciseListComponent', () => {
  let component: ExerciseListComponent;
  let fixture: ComponentFixture<ExerciseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExerciseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
