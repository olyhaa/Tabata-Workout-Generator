import { TestBed } from '@angular/core/testing';
import { GREEN_COLOR, PREPARE_INTERVAL, REST_INTERVAL, WORK_INTERVAL } from './constants';
import { GeneratedWorkout } from './types';

import { WorkoutStatsService } from './workout-stats.service';

describe('WorkoutStatsService', () => {
  let service: WorkoutStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate total time', () => {
    const workout: GeneratedWorkout = {
      doNotRepeatFirstPrepareAndLastCoolDown: false,
      isFavorite: false,
      isRestRepsMode: false,
      isWorkRepsMode: false,
      restBetweenWorkoutsRepsMode: false,
      skipLastRestInterval: true,
      skipPrepareAndCoolDownBetweenWorkouts: false,
      colorId: GREEN_COLOR,
      id: -1,
      intervals: [
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Prepare",
          type: PREPARE_INTERVAL,
          time: 62,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Bird-Dog, left",
          type: WORK_INTERVAL,
          time: 30,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Bird-Dog, right",
          type: WORK_INTERVAL,
          time: 31,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Rest",
          type: REST_INTERVAL,
          time: 15,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Leg Raises",
          type: WORK_INTERVAL,
          time: 25,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Rest",
          type: REST_INTERVAL,
          time: 10,
        },
      ],
      intervalsSetsCount: 1,
      title: "New Workout",
    };
    expect(service.getTotalTime(workout)).toBe(service.getTime(173));
  });

  it('should calculate total time for multiple cycles', () => {
    const workout: GeneratedWorkout = {
      doNotRepeatFirstPrepareAndLastCoolDown: false,
      isFavorite: false,
      isRestRepsMode: false,
      isWorkRepsMode: false,
      restBetweenWorkoutsRepsMode: false,
      skipLastRestInterval: true,
      skipPrepareAndCoolDownBetweenWorkouts: false,
      colorId: GREEN_COLOR,
      id: -1,
      intervals: [
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Prepare",
          type: PREPARE_INTERVAL,
          time: 62,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Leg Raises",
          type: WORK_INTERVAL,
          time: 25,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Rest",
          type: REST_INTERVAL,
          time: 10,
        },
      ],
      intervalsSetsCount: 2,
      title: "New Workout",
    };
    expect(service.getTotalTime(workout)).toBe(service.getTime(122));
  });

  it('should convert time', () => {
    expect(service.getTime(60)).toBe("1:00");
    expect(service.getTime(34)).toBe("0:34");
    expect(service.getTime(125)).toBe("2:05");
  });

  it('should extract intervals', () => {
    const workout: GeneratedWorkout = {
      doNotRepeatFirstPrepareAndLastCoolDown: false,
      isFavorite: false,
      isRestRepsMode: false,
      isWorkRepsMode: false,
      restBetweenWorkoutsRepsMode: false,
      skipLastRestInterval: true,
      skipPrepareAndCoolDownBetweenWorkouts: false,
      colorId: GREEN_COLOR,
      id: -1,
      intervals: [
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Prepare",
          type: PREPARE_INTERVAL,
          time: 62,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Bird-Dog, left",
          type: WORK_INTERVAL,
          time: 30,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Bird-Dog, right",
          type: WORK_INTERVAL,
          time: 31,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Rest",
          type: REST_INTERVAL,
          time: 15,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Leg Raises",
          type: WORK_INTERVAL,
          time: 25,
        },
        {
          addSet: false,
          bpm: 0,
          cycle: -1,
          cyclesCount: -1,
          isRepsMode: false,
          reps: 0,
          tabata: -1,
          tabatasCount: -1,
          description: "Rest",
          type: REST_INTERVAL,
          time: 10,
        },
      ],
      intervalsSetsCount: 1,
      title: "New Workout",
    };
    expect(service.extractIntervals(workout)).toEqual([
      {
        description: "Bird-Dog, left",
        work: 30,
        workTime: "0:30",
        rest: 0,
        restTime: "0:00"
      },
      {
        description: "Bird-Dog, right",
        work: 31,
        workTime: "0:31",
        rest: 15,
        restTime: "0:15"
      },
      {
        description: "Leg Raises",
        work: 25,
        workTime: "0:25",
        rest: 10,
        restTime: "0:10",
      },
    ]
    );
  });
});
