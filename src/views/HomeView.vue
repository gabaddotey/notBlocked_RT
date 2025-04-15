<script setup lang="ts">
import {getActivityList, getActivity, type Activity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'
import {getCraftList, getCraft} from '@/stores/crafts.ts'
import CraftPreview from '../components/CraftPreview.vue'
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
  <div class="wrapper">
    <h1 class="page-title">Home</h1>  
    <Suspense>
      <EventList />

      <template #fallback>
        <h2>Loading Reccomended Activities...</h2>
      </template>
    </Suspense>

    <div v-for="craft in craftList">
      <CraftPreview :craftId= craft[1].craftId :craftName = craft[1].craftName 
      :craftMaterials = craft[1].craftMaterials :craftTags = craft[1].craftTags :needsButton="craft[1].needsButton"/> 
    </div>
  </div>
</template>

<style>
  .page-title{
    font-size:50px;
    margin-bottom:30px;
    padding:15px;
    width:100vw;
    text-align:center;
    place-self: center;

    background: var(--c-teal);
    border: 5px var(--c-navy) solid;
    box-shadow: -5px 5px var(--c-navy);
    text-shadow: -3.5px 3px var(--c-navy),-2.5px 2.5px var(--c-navy),-2px 2px var(--c-navy),-1px 1px var(--c-navy);
  }

  .home-button, .home-button *{
    background-color: var(--c-navy);
    color:white;
    font-size: 15px;
    text-decoration: none !important;
  }

  .wrapper{
      margin-bottom: 10vh;
  }
</style>

<style scoped>
  h2{
    color:var(--c-navy);
  }
</style>