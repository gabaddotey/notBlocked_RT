import { type Tag} from "@/stores/tags.ts"
import { GoogleGenerativeAI } from "@google/generative-ai";
import {usePrefStore, type Answer} from '@/stores/preferences.ts'
import { getPreferencesForGemini } from "./questions";

//Old
// export interface Activity {
//   activityId: number
//   activityName: string
//   activityDate: string
//   isFree: boolean
//   activityLocation: string
//   activityDistance: number
//   activityTags: Tag[]
// }

// Most recent
export interface Activity {
  activityName: string
  activityLocation: string
  learnMoreLink: string
  activityDistance: number
  activityTags: []
  priceRating: number
  price: number | string
  isFree: boolean
}

//Reactive with this Map within so the data can be updated from the Gemini JSON?


// export const activityList: Map<number, Activity> = new Map<number, Activity>([
//   [1, { activityId: 1, activityName: 'FIRST Activity', activityDate:"activityDate of 1st activity", isFree:true, activityLocation:"location 1", activityDistance:111, activityTags: [] }],
//   [2, { activityId: 2, activityName: 'SECOND Activity', activityDate:"activityDate of 2nd activity", isFree:false, activityLocation:"location 2", activityDistance:222, activityTags: [] }]
// ])


async function geminiGenerate() {
  const genAI = new GoogleGenerativeAI("AIzaSyBG8ljS0XM6hxCOs_krne3o_4yL2o0EbYU");
  const prefArr = getPreferencesForGemini()

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = `Can you generate a list of things to do near the 23233 zip code? Use the following list as the target user's preferences for the activities they like:
  ${prefArr}
  Limit the response to 4 activities max. Use the json format below and only return valid json code WITHOUT including the word json or anything before the opening square bracket, or any additional "\`" characters. The response should begin with a square bracket and end with a closing square bracket.
  { activityName: "Name of activity",
  activityLocation: "The location of the activity"
  learnMoreLink: "A link to the location's website or somewhere to get more information about the activity"
  activityDistance: "How far away the activity is in miles as a number type"
  activityTags: "An array of tags that relate to the activity"
  priceRating: "A number rating 0-4 based on how expensive the activity is with 0 being free"
  price: "The general price in USD or 0 if it's free"
  priceExplaination: "Explain where you got the price from and what the money is for"
  isFree: "a boolean true or false if the activity is free"
  isFreeExplaination: "Explain why the activity is free or not"
  }`
  // ${prefArr}`

  const result = await model.generateContent(prompt);
  console.log("readable text result "+result.response.text())
  var data = JSON.parse(result.response.text())

  // console.log(`The output is ${Data}`)
  return data
}

// async function getActivityList(): Promise< Map<number, Activity> > {
//   return activityList
// }

async function getActivityList(): Promise< Map<string, Activity> > {
  const data = await geminiGenerate()
  //console.log(Object.keys(Data).map(k => ({ [k]: Data[k] })))
  // export const activityList: Map<string, Activity> = Object.keys(Data).map(k => ({ [k]: Data[k][k] }))

  const activityList: Map<string, Activity> = new Map(Object.keys(data).map( k => [k,data[k]] ))
  console.log("Data[1]: "+data[1].activityName)
  // console.log(typeof Data + " Data type")
  console.log("this is the act list "+activityList)

  for(const [key, value] of activityList)
    console.log(key, "->" ,value)
  
  return activityList

}

async function getActivity(activityId: string): Promise < Activity | undefined > {
  const activity = await getActivityList()
  return activity.get(activityId)
  // console.log(`ID: ${question.id} title: ${question.activityName}`)
}

export { getActivityList, getActivity }