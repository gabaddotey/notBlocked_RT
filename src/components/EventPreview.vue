<script setup lang="ts">
import { useRoute } from 'vue-router'
import {ref,watch, defineComponent, getCurrentInstance, onMounted } from 'vue'
import getActivity from '@/stores/activities.ts'

defineProps({
  activityName: String,
  activityLocation: String,
  activityDistance: Number,
  isFree:Boolean
})

</script>

<template>
  <div>
    <h1>Activity Name: {{ activityName }}</h1>
    <h2>Location: {{ activityLocation }}</h2>
    <h3>Distance: {{ activityDistance }}mi.</h3>

    <h2>Free? {{ isFree }}</h2>
  </div>
</template>

<style scoped>
div{
  border: 5px grey solid;
  padding: 10px;
  margin: 5px;
}
</style>