<script setup lang="ts">
import {getActivityList, getActivity, type Activity} from '@/stores/activities.ts'
import EventPreview from './EventPreview.vue'

try{
  const data = await getActivityList()
  console.log("await worked???")
} catch (e){
  console.log("DANG")
  console.error(e)
}
const data = await getActivityList()
const actList = data

</script>

<template>
    <div v-for="act in actList">

    <EventPreview :activityName= act[1].activityName 
      :isFree=act[1].isFree 
      :activityLocation=act[1].activityLocation 
      :activityDistance=act[1].activityDistance
      :activityTags = act[1].activityTags />

    </div>
</template>
