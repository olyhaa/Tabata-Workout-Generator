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
