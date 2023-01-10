export type Exercise = {
  name: string,
  equipment?: string[]
  leftAndRight?: boolean
}

export type Interval = {
  description?: string,
  work?: number,
  rest?: number,
  workTime?: string,
  restTime?: string
}

export type Workout = {
  title?: string,
  colorId?: number,
  intervals?: Interval[],
  intervalsSetsCount?: number
}

export type WorkoutParams = {
  title: string,
  numSets: number,
  numCycles: number,
  prepareTime: number,
  workTime: number,
  restTime: number,
  exerciseList: Exercise[]
}

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

export const GREEN_COLOR = 8;

export type GeneratedInterval = {
  addSet: boolean,
  bpm: number,
  cycle: number,
  cyclesCount: number,
  isRepsMode: boolean,
  reps: number,
  tabata: number,
  tabatasCount: number,
  description: string,
  type: number,
  time: number
}

export type GeneratedWorkout = {
  doNotRepeatFirstPrepareAndLastCoolDown: boolean,
  isFavorite: boolean,
  isRestRepsMode: boolean,
  isWorkRepsMode: boolean,
  restBetweenWorkoutsRepsMode: boolean,
  skipLastRestInterval: boolean,
  skipPrepareAndCoolDownBetweenWorkouts: boolean,
  colorId: number,
  id: number,
  intervals: GeneratedInterval[],
  intervalsSetsCount: number,
  title: string,
}

export type GeneratedExport = {
  fileVersion: number,
  packageName: string,
  platform: number,
  type: number,
  versionCode: number,
  versionName: string,
  workout: GeneratedWorkout | {}
}
