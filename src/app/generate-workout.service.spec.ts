import { TestBed } from '@angular/core/testing';

import { GenerateWorkoutService } from './generate-workout.service';
import { DEFAULT_NUM_CYCLES, GREEN_COLOR, PREPARE_INTERVAL, REST_INTERVAL, WORK_INTERVAL } from './constants';

describe('GenerateWorkoutService', () => {
  let service: GenerateWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("getWorkout", () => {
    it("should generate default workout object", () => {
      const expectedWorkout = {
        doNotRepeatFirstPrepareAndLastCoolDown: true,
        isFavorite: false,
        isRestRepsMode: false,
        isWorkRepsMode: false,
        restBetweenWorkoutsRepsMode: false,
        skipLastRestInterval: true,
        skipPrepareAndCoolDownBetweenWorkouts: false,
        colorId: GREEN_COLOR,
        id: -1,
        intervals: [],
        intervalsSetsCount: DEFAULT_NUM_CYCLES,
        title: "New Workout",
      };

      expect(service.getWorkout({})).toEqual(expectedWorkout);
    });

    it("should generate custom workout object", () => {
      const expectedWorkout = {
        doNotRepeatFirstPrepareAndLastCoolDown: true,
        isFavorite: false,
        isRestRepsMode: false,
        isWorkRepsMode: false,
        restBetweenWorkoutsRepsMode: false,
        skipLastRestInterval: true,
        skipPrepareAndCoolDownBetweenWorkouts: false,
        colorId: GREEN_COLOR,
        id: 25,
        intervals: [],
        intervalsSetsCount: 2,
        title: "Custom Workout",
      };

      expect(service.getWorkout({ id: 25, title: "Custom Workout", numCycles: 2 })).toEqual(
        expectedWorkout
      );
    });

    it("should generate custom workout object with single exercise list", () => {
      const expectedWorkoutIntervals = [
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
          time: 60,
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
          description: "Rest",
          type: REST_INTERVAL,
          time: 15,
        },
      ];

      const customExerciseList = [
        {
          name: "Leg Raises",
          type: ["core"]
        },
      ];

      expect(service.getWorkout({ exerciseList: customExerciseList }).intervals).toEqual(
        expectedWorkoutIntervals
      );
    });

    it("should generate custom workout object with exercise list", () => {
      const expectedWorkout = {
        doNotRepeatFirstPrepareAndLastCoolDown: true,
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
            time: 60,
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
            description: "Rest",
            type: REST_INTERVAL,
            time: 15,
          },
        ],
        intervalsSetsCount: DEFAULT_NUM_CYCLES,
        title: "New Workout",
      };

      const customExerciseList = [
        {
          name: "Bird-Dog",
          leftAndRight: true,
          type: ["core"]
        },
        {
          name: "Leg Raises",
          type: ["core"]
        },
      ];

      expect(service.getWorkout({ exerciseList: customExerciseList })).toEqual(
        expectedWorkout
      );
    });
  });
});
