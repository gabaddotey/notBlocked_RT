<script setup lang="ts">
const props = defineProps({
  craftId: Number,
  craftName: String,
  //craftMaterials: String[], //Or tags??
  craftTime: Number
})

const craftLink = "/craft/"+(props.craftId?.toString())

</script>

<template>
  <div>
    <h1>Craft Name: {{ craftName }}</h1>
    <h2>Time: {{ craftTime }} min.</h2>
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