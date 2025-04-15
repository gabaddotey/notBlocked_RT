<script setup lang="ts">
import {getActivityList, getActivity} from '@/stores/activities.ts'
import EventPreview from '../components/EventPreview.vue'
import EventList from '@/components/EventList.vue'

let today = new Date().toLocaleDateString()

</script>

<template>
  <div class="wrapper">
    <h1 class="page-title">Going Out?</h1>
    <Suspense>
      <EventList />
    </Suspense>
  </div>
</template>