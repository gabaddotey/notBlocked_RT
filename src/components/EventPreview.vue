<script setup lang="ts">
const props = defineProps({
  activityId: Number,
  activityName: String,
  activityLocation: String,
  activityDistance: Number,
  isFree:Boolean
})

const eventLink = "/event/"+(props.activityId?.toString())

</script>

<template>
  <div>
    <h1>Activity Name: {{ activityName }}</h1>
    <h2>Location: {{ activityLocation }}</h2>
    <h3>Distance: {{ activityDistance }}mi.</h3>
    <button><RouterLink :to= eventLink>Learn More</RouterLink></button>
    <h2 class="price">Free? {{ isFree }}</h2>
  </div>
</template>

<style scoped>
div{
  border: 5px grey solid;
  padding: 10px;
  margin: 5px;
}
.price{
  float:right;
  text-align: right;
  font-size: 15px;
}
</style>