import { type Tag} from "@/stores/tags.ts"
//Change name to tutorials??
export interface Craft {
  craftId: number
  craftName: string
  craftMaterials: string[] //Or tags??
  craftTime: number
  craftTags: Tag[]
}

export const craftList: Map<number, Craft> = new Map<number, Craft>([
  [1, { craftId: 1, craftName: 'FIRST craft', craftMaterials: ["a","b","c"], craftTime:30, craftTags: [{"indoors":true},{"outdoors":true}] }],
  [2, { craftId: 2, craftName: 'SECOND craft', craftMaterials: ["a","b","c"], craftTime:40, craftTags: [{"today":true},{"indoors":true}] }],
  [3, { craftId: 3, craftName: 'THIRD craft', craftMaterials: ["a","b","c"], craftTime:50, craftTags:[]}],
])

//Testing how I can extract the name of the tag w/o the entire object
// const excraft = getCraft(1)?.craftTags[0]
// var TheName = Object.keys(excraft!)
// console.log(excraft)
// console.log("Should say tag name: "+ TheName)

function getCraftList(): Map<number, Craft> {
  return craftList
}

function getCraft(craftId: number): Craft | undefined {
  const craft = craftList.get(craftId)
  // console.log(`ID: ${question.id} title: ${question.craftName}`)
  return craft
}

export { getCraftList, getCraft }