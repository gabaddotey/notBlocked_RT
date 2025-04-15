<script setup lang="ts">
import {getActivityList, getActivity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'
import EventList from '@/components/EventList.vue'

let today = new Date().toLocaleDateString()

</script>

<template>
  <div class="wrapper">
    <button class="home-button"><RouterLink to="/home">Home</RouterLink></button>
    <h1 class="page-title">Going Out?</h1>
    <Suspense>
      <EventList />
      <template #fallback>
        <h2>Loading Reccomended Activities...</h2>
      </template>
    </Suspense>
  </div>
</template>