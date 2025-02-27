<script setup lang="ts">
import {getActivityList, getActivity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'
import NavBar from '@/components/NavBar.vue';
import type { forEachChild } from 'typescript';

var activityList = getActivityList()

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("AIzaSyBG8ljS0XM6hxCOs_krne3o_4yL2o0EbYU");
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

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

  <NavBar />

</template>