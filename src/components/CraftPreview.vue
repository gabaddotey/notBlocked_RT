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
    <p v-for="tag in craftTags">{{ Object.keys(tag!)[0] }}</p>
    <h2>Time: {{ craftTime }} min.</h2>
    <button><RouterLink :to= craftLink>Let's Do It!</RouterLink></button>
  </div>
</template>

<style scoped>
div{
  border: 5px lightblue solid;
  padding: 10px;
  margin: 5px;

}
p{
  border: 5px lightblue solid;
  width: fit-content;
  display: inline-flex;
  padding: 5px;
  margin-right: 10px;
}
</style>