<script setup lang="ts">
import {getActivityList, getActivity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'
import {getCraftList, getCraft} from '@/stores/crafts.ts'
import CraftPreview from '../components/CraftPreview.vue'
import { GoogleGenerativeAI } from "@google/generative-ai";

var craftList = getCraftList()
var activityList = getActivityList()

const genAI = new GoogleGenerativeAI("AIzaSyBG8ljS0XM6hxCOs_krne3o_4yL2o0EbYU");

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
const prompt = `Can you generate a list of thhings to do near Richmond VA? I am interested in outdoor activities. Limit the response to 4 activities. Use the following json format and only return valid json code WITHOUT Markup syntax. Don't include the word json or anything before the opening square bracket.
{ activity: "Name of activity",
isFree: "true or false if the activity is free"
isFreeExplaination: "Explain why the activity is free or not"
}`

const result = await model.generateContent(prompt);
var text = result.response.text();

console.log(`The output is ${text}`)

</script>

<template>
  <h1>Home</h1>

  <div v-for="act in activityList">
    <EventPreview :activityId= act[1].activityId
    :activityName= act[1].activityName :isFree=act[1].isFree 
    :activityLocation=act[1].activityLocation 
    :activityDistance=act[1].activityDistance
    :activityTags = act[1].activityTags /> 
  </div>

  <div v-for="craft in craftList">
    <CraftPreview :craftId= craft[1].craftId :craftName = craft[1].craftName 
    :craftMaterials = craft[1].craftMaterials :craftTime = craft[1].craftTime
    :craftTags = craft[1].craftTags /> 
  </div>

</template>