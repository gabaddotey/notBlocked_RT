<script setup lang="ts">
import {getActivityList, getActivity,filterTags, type Activity} from '@/stores/activities.ts'
import EventPreview from './EventPreview.vue'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { reactive } from 'vue'
import { forEachChild } from 'typescript'

const data = await getActivityList()

onMounted(async () => {
  state.activities = Array.from(data.values())
  state.selectedActivities = state.activities
  state.tags = filterTags
})

const state = reactive({ 
  tags: [] as string[],
	
  selectedTags: [] as string[],

  activities: [] as Activity[],

  selectedActivities: [] as Activity[],
})


function tagClicked(tag:string){
  if(!state.selectedTags.includes(tag)){
    state.selectedTags.push(tag)
    console.log("pushed tag "+ tag)
  }else{
    state.selectedTags.splice(state.selectedTags.indexOf(tag),1)
    const matchingActivities = state.selectedActivities.filter(c => c.filterTags.includes(tag))
    //for(const a of matchingActivities)      
    state.selectedActivities.filter(c => !c.filterTags.includes(tag))
    //console.log(JSON.stringify(state.selectedActivities.filter(c => !c.filterTags.includes(tag))))
    console.log("removed tag")
    // state.selectedActivities = state.activities.filter(c => c.filterTags.includes(tag)!)

    // for(tag in state.selectedTags){
    //   const matchingActivities = state.activities.filter(c => c.filterTags.includes(tag))
    //   state.selectedActivities.concat(matchingActivities)
    // }
  }
  state.selectedActivities = state.activities.filter(c => c.filterTags.includes(tag))
  for(tag in state.selectedTags){
    const matchingActivities = state.activities.filter(c => c.filterTags.includes(tag))
    state.selectedActivities.concat(matchingActivities)
  }
}

function clearTags(){
  state.selectedActivities = state.activities
  state.selectedTags = []
}

</script>

<template>
  <h3>Filters:</h3>
  <div id="filters">
    <div v-for="tag in state.tags" :key="tag">
      <button class="tag" :class="{ 'selected': state.selectedTags.includes(tag)}" @click="tagClicked(tag)">{{ tag }}</button>
    </div>
    <button id="clear" @click="clearTags()">Clear filters</button>
  </div>
    <!-- <h2>{{ state.selectedTags }}</h2> -->
    <div v-for="act in state.selectedActivities">

    <EventPreview :activityName= act.activityName 
      :isFree=act.isFree 
      :activityLocation=act.activityLocation 
      :activityDistance=act.activityDistance
      :filterTags= act.filterTags
      :activityTags = act.activityTags />

    </div>
</template>

<style scoped>
  #filters{
    display:inline-flex;
    gap:10px;
    flex-wrap:wrap;
    margin-bottom:15px;
  }
  .selected{
    background:var(--c-dark-orange);
    scale: 115%;
    border: inherit 10px solid;
  }

  h3{
    font-family: "charcuterie-block", sans-serif;
    font-weight: 800;
    color: var(--c-orange);
    font-size: 40px;
    margin-bottom:10px;
  }
  #clear{
    background: var(--c-navy);
    color: white;
  }
</style>
