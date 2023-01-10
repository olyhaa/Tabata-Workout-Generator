import { TestBed } from '@angular/core/testing';

import { GenerateIntervalsService } from './generate-intervals.service';
import { PREPARE_INTERVAL, REST_INTERVAL, WORK_INTERVAL } from './constants';

describe('GenerateIntervalsService', () => {
  let service: GenerateIntervalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateIntervalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("getWorkInterval", () => {
    it("should generate default work object", () => {
      const expectedWork = {
        addSet: false,
        bpm: 0,
        cycle: -1,
        cyclesCount: -1,
        isRepsMode: false,
        reps: 0,
        tabata: -1,
        tabatasCount: -1,
        description: "Work",
        type: WORK_INTERVAL,
        time: 30,
      };

      expect(service.getWorkInterval({})).toEqual(expectedWork);
    });

    it("should generate semi-custom work object", () => {
      const expectedWork = {
        addSet: false,
        bpm: 0,
        cycle: -1,
        cyclesCount: -1,
        isRepsMode: false,
        reps: 0,
        tabata: -1,
        tabatasCount: -1,
        description: "Work",
        type: WORK_INTERVAL,
        time: 25,
      };

      expect(service.getWorkInterval({ time: 25 })).toEqual(expectedWork);
    });

    it("should generate custom work object", () => {
      const expectedWork = {
        addSet: false,
        bpm: 0,
        cycle: -1,
        cyclesCount: -1,
        isRepsMode: false,
        reps: 0,
        tabata: -1,
        tabatasCount: -1,
        description: "My Interval",
        type: WORK_INTERVAL,
        time: 25,
      };

      expect(service.getWorkInterval({ time: 25, description: "My Interval" })).toEqual(
        expectedWork
      );
    });
  });

  describe("getRestInterval", () => {
    it("should generate default rest object", () => {
      const expectedRest = {
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
      };

      expect(service.getRestInterval({})).toEqual(expectedRest);
    });

    it("should generate semi-custom rest object", () => {
      const expectedRest = {
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
        time: 25,
      };

      expect(service.getRestInterval({ time: 25 })).toEqual(expectedRest);
    });

    it("should generate custom rest object", () => {
      const expectedRest = {
        addSet: false,
        bpm: 0,
        cycle: -1,
        cyclesCount: -1,
        isRepsMode: false,
        reps: 0,
        tabata: -1,
        tabatasCount: -1,
        description: "My Rest Interval",
        type: REST_INTERVAL,
        time: 14,
      };

      expect(
        service.getRestInterval({ time: 14, description: "My Rest Interval" })
      ).toEqual(expectedRest);
    });
  });

  describe("getPrepareInterval", () => {
    it("should generate default prepare object", () => {
      const expectedRest = {
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
      };

      expect(service.getPrepareInterval({})).toEqual(expectedRest);
    });

    it("should generate semi-custom prepare object", () => {
      const expectedRest = {
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
        time: 25,
      };

      expect(service.getPrepareInterval({ time: 25 })).toEqual(expectedRest);
    });

    it("should generate custom prepare object", () => {
      const expectedRest = {
        addSet: false,
        bpm: 0,
        cycle: -1,
        cyclesCount: -1,
        isRepsMode: false,
        reps: 0,
        tabata: -1,
        tabatasCount: -1,
        description: "My Prepare Interval",
        type: PREPARE_INTERVAL,
        time: 14,
      };

      expect(
        service.getPrepareInterval({ time: 14, description: "My Prepare Interval" })
      ).toEqual(expectedRest);
    });
  });
});
