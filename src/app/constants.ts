export const GREEN_COLOR = 8;

export const DEFAULT_NUM_SETS = 8;
export const DEFAULT_NUM_CYCLES = 3;

export const DEFAULT_PREPARE_TIME = 60;
export const DEFAULT_WORK_TIME = 30;
export const DEFAULT_REST_TIME = 15;

export const PREPARE_INTERVAL = 0;
export const WORK_INTERVAL = 1;
export const REST_INTERVAL = 2;

export const getIntervalTypeDisplay = function (interval: number): string {
  if (interval === PREPARE_INTERVAL) {
    return "Prepare"
  } else if (interval === WORK_INTERVAL) {
    return "Work"
  } else if (interval === REST_INTERVAL) {
    return "Rest"
  }
  return `${interval}`
}

export const BASE_EXERCISE_OBJ = {
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
  time: DEFAULT_WORK_TIME
};

export const BASE_WORKOUT_OBJ = {
  doNotRepeatFirstPrepareAndLastCoolDown: true,
  isFavorite: false,
  isRestRepsMode: false,
  isWorkRepsMode: false,
  restBetweenWorkoutsRepsMode: false,
  skipLastRestInterval: true,
  skipPrepareAndCoolDownBetweenWorkouts: false,
  colorId: GREEN_COLOR,
  intervals: [],
  id: -1,
  intervalsSetsCount: DEFAULT_NUM_CYCLES,
  cycles: DEFAULT_NUM_SETS,
  title: "Workout",
  restBetweenTabatas: 0,
  restBetweenWorkoutsReps: 0,
  restBetweenWorkoutsTime: 0,
  restBpm: 0,
  restReps: 0,
  workBpm: 0,
  workReps: 0,
  tabatasCount: 1,
  coolDown: 0,
  work: DEFAULT_WORK_TIME,
  rest: DEFAULT_REST_TIME,
  prepare: DEFAULT_PREPARE_TIME,
};

export const BASE_FILE_OBJ = {
  fileVersion: 1,
  packageName: "com.evgeniysharafan.tabatatimer",
  platform: 1,
  type: 1,
  versionCode: 502002,
  versionName: "5.2.2"
};
