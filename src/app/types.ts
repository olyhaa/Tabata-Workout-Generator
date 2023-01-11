export type Exercise = {
  name: string,
  equipment?: string[]
  leftAndRight?: boolean,
  type: string[]
}

export type CombinedInterval = {
  description?: string,
  work?: number,
  rest?: number,
  workTime?: string,
  restTime?: string
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

export type GeneratedInterval = {
  addSet: boolean,
  bpm: number,
  cycle: number,
  cyclesCount: number,
  isRepsMode: boolean,
  reps: number,
  tabata: number,
  tabatasCount: number,
  description?: string,
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
  workout?: GeneratedWorkout
}
