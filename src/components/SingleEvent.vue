<script setup lang="ts">
import { useRoute } from 'vue-router'
import {ref,watch, defineComponent, getCurrentInstance, onMounted } from 'vue'
import {getActivity, type Activity} from '@/stores/activities.ts'

const router = useRoute()

var activityName: string
var activityDate: string
var isFree: boolean
var activityLocation: string
var activityDistance: number
var activity: Activity

const loading = ref(false)
const error = ref(null)

watch(() => router.params.id, fetchData, { immediate: true })

async function fetchData(id: string| string[] | number) {
  console.log(`The id passed in was: ${id}`)
  //const activityId: number = parseInt(id)
  id = parseInt(id.toString())
  activity = await getActivity(id.toString())! as Activity

  loading.value = true

  try {
    activityName = activity.activityName  
    isFree = activity.isFree
    activityLocation = activity.activityLocation
    activityDistance = activity.activityDistance
  } catch {
    console.log("dang")
  } finally {
    loading.value = false
  }
  
}

</script>

<template>
  <button class="home-button"><RouterLink to="/home">Home</RouterLink></button>
  <h1>Activity Name: {{ activityName }}</h1>
  <h2>Location: {{activityLocation}}</h2>
  <h3>Distance: {{activityDistance}}mi.</h3>
</template>

<style scoped>

</style>