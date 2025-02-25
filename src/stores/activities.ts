interface Activity {
  id: number
  activityName: string
  activityDate: string
  isFree: boolean
  activityLocation: string
  activityDistance: number
}

export const activityList: Map<number, Activity> = new Map<number, Activity>([
  [1, { id: 1, activityName: 'FIRST Activity', activityDate:"activityDate of 1st activity", isFree:true, activityLocation:"location 1", activityDistance:111}],
  [2, { id: 2, activityName: 'SECOND Activity', activityDate:"activityDate of 2nd activity", isFree:false, activityLocation:"location 2", activityDistance:222}],
  [3, { id: 3, activityName: 'THIRD Activity', activityDate:"activityDate of 3rd activity", isFree:true, activityLocation:"location 3", activityDistance:333}],
])


export function getActivityList(): Map<number, Activity> {
  return activityList
}

export function getActivity(activityId: number): Activity | undefined {
  const activity = activityList.get(activityId)
  // console.log(`ID: ${question.id} title: ${question.activityName}`)
  return activity
}

export default { getActivityList, getActivity }