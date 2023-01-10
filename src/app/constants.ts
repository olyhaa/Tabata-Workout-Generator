export const GREEN_COLOR = 8;

export const DEFAULT_PREPARE_TIME = 0;
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
  doNotRepeatFirstPrepareAndLastCoolDown: false,
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
  title: "Workout",
};

export const BASE_FILE_OBJ = {
  fileVersion: 1,
  packageName: "com.evgeniysharafan.tabatatimer",
  platform: 1,
  type: 1,
  versionCode: 502002,
  versionName: "5.2.2",
  workout: {}
};
