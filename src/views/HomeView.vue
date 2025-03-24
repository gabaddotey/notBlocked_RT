<script setup lang="ts">
import {getActivityList, getActivity, type Activity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'
import {getCraftList, getCraft} from '@/stores/crafts.ts'
import CraftPreview from '../components/CraftPreview.vue'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Suspense } from 'vue';
import EventList from '@/components/EventList.vue';

const craftList = getCraftList()

//Home page won't render if this isn't commented out (I think b/c of promise??)

// const genAI = new GoogleGenerativeAI("AIzaSyBG8ljS0XM6hxCOs_krne3o_4yL2o0EbYU");

// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
// const prompt = `Can you generate a list of thhings to do near Richmond VA? I am interested in outdoor activities. Limit the response to 4 activities. Use the following json format and only return valid json code WITHOUT Markup syntax. Don't include the word json or anything before the opening square bracket.
// { activity: "Name of activity",
// isFree: "true or false if the activity is free"
// isFreeExplaination: "Explain why the activity is free or not"
// }`

// const result = await model.generateContent(prompt);
// var text = result.response.text();

// console.log(`The output is ${text}`)

</script>

<template>

  <h1>Home</h1>
  <Suspense>
    <EventList />

    <template #fallback>
      <b>Loading...</b>
    </template>
  </Suspense>

  <div v-for="craft in craftList">
    <CraftPreview :craftId= craft[1].craftId :craftName = craft[1].craftName 
    :craftMaterials = craft[1].craftMaterials :craftTime = craft[1].craftTime
    :craftTags = craft[1].craftTags /> 
  </div>

</template>