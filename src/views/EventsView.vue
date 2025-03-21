<script setup lang="ts">
import {getActivityList, getActivity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'
import EventList from '@/components/EventList.vue'

let today = new Date().toLocaleDateString()

</script>

<template>
  <h1>Activities</h1>
  <Suspense>
    <EventList />
  </Suspense>
</template>