import { GREEN_COLOR, WORK_INTERVAL } from "src/app/types";

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
  time: 15
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
