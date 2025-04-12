<script setup lang="ts">
import {getActivityList, getActivity, type Activity} from '@/stores/activities.ts'
import EventPreview from './EventPreview.vue'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { reactive } from 'vue'


onMounted(async () => {
  const data = await getActivityList()
  state.activities = Array.from(data.values())
  state.selectedActivities = state.activities
})

const state = reactive({ 
  tags: ["indoor","outdoor","kid-friendly","active"],
	
  selectedTags: [],

  activities: [] as Activity[],

  selectedActivities: [] as Activity[],
})

function tagClicked(tag:string){
  state.selectedTags = state.selectedTags.filter(c => c != tag)
  state.selectedActivities = state.activities.filter(c => c.filterTags.includes(tag))
  console.log(state.selectedTags)
}

</script>

<template>
  <div id="filters">
    <div v-for="tag in state.tags" :key="tag">
      <button @click="tagClicked(tag)">{{ tag }}</button>
    </div>
    <button @click="state.selectedActivities = state.activities">Clear filters</button>
  </div>
    <h2>{{ state.selectedTags }}</h2>
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
    gap:10px
  }
</style>
