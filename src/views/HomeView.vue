<script setup lang="ts">
import {getActivityList, getActivity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'
import {getCraftList, getCraft} from '@/stores/crafts.ts'
import CraftPreview from '../components/CraftPreview.vue'

var craftList = getCraftList()
var activityList = getActivityList()

// const { GoogleGenerativeAI } = import.meta.glob("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

</script>

<template>
  <h1>Home</h1>

  <div v-for="act in activityList">
    <EventPreview :activityId= act[1].activityId
    :activityName= act[1].activityName :isFree=act[1].isFree 
    :activityLocation=act[1].activityLocation 
    :activityDistance=act[1].activityDistance /> 
  </div>

  <div v-for="craft in craftList">
    <CraftPreview :craftId= craft[1].craftId :craftName = craft[1].craftName 
    :craftMaterials = craft[1].craftMaterials :craftTime = craft[1].craftTime /> 
  </div>

</template>