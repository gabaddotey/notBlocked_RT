import { parseConfigFileTextToJson } from 'typescript'
import { ref, reactive } from 'vue'

// export type Tag = { 
//   indoors?: boolean
//   outdoors?: boolean
//   today?: boolean
// }

export type TagNames = "indoors" | "outdoors" | "today"

export type Tag = {
  [name in TagNames]: boolean
//[key:string]: string
}

// export type Tag = Record<TagNames, boolean>

 //Maybe 2 classes of tags? ex. activity characteristics 
 //(indoor, kid-friendly etc.) and types of activity 
 //(origami, playground  etc.)?

export type TagsMap = Map<number, Tag>;
//Should or Could this be an array??