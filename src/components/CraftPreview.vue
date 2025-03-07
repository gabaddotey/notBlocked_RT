<script setup lang="ts">
import { type Tag } from "@/stores/tags.ts"
import { type PropType } from "vue"

const props = defineProps({
  craftId: Number,
  craftName: String,
  //craftMaterials: String[], //Or tags??
  craftTime: Number,
  craftTags: Array as PropType<Tag[]>
})

const craftLink = "/craft/"+(props.craftId?.toString())


</script>

<template>
  <div>
    <h1>Craft Name: {{ craftName }}</h1>
    <h2>Time: {{ craftTime }} min.</h2>
    <div v-for="tag in craftTags">
      <p v-if="tag">{{ Object.keys(tag!)[0] }}</p>
    </div>
    <button><RouterLink :to= craftLink>Learn More</RouterLink></button>
  </div>
</template>

<style scoped>
div{
  border: 5px lightblue solid;
  padding: 10px;
  margin: 5px;
}
</style>