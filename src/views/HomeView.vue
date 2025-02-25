<script setup lang="ts">
import {getActivityList, getActivity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'

var activityList = getActivityList()


</script>

<template>
  <h1>home</h1>

  <div v-for="act in activityList">
    <EventPreview :activityName= act[1].activityName :isFree=act[1].isFree :activityLocation=act[1].activityLocation 
    :activityDistance=act[1].activityDistance /> 
  </div>

</template>