export interface Craft {
  craftId: number
  craftName: string
  craftMaterials: string[] //Or tags??
  craftTime: number
}

export const craftList: Map<number, Craft> = new Map<number, Craft>([
  [1, { craftId: 1, craftName: 'FIRST craft', craftMaterials: ["a","b","c"], craftTime:30}],
  [2, { craftId: 2, craftName: 'SECOND craft', craftMaterials: ["a","b","c"], craftTime:40}],
  [3, { craftId: 3, craftName: 'THIRD craft', craftMaterials: ["a","b","c"], craftTime:50}],
])

function getCraftList(): Map<number, Craft> {
  return craftList
}

function getCraft(craftId: number): Craft | undefined {
  const craft = craftList.get(craftId)
  // console.log(`ID: ${question.id} title: ${question.craftName}`)
  return craft
}

export { getCraftList, getCraft }