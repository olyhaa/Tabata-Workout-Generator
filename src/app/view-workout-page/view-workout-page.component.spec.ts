import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkoutPageComponent } from './view-workout-page.component';

describe('ViewWorkoutPageComponent', () => {
  let component: ViewWorkoutPageComponent;
  let fixture: ComponentFixture<ViewWorkoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWorkoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
