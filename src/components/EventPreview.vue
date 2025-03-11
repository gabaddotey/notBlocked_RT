<script setup lang="ts">
import { type Tag } from "@/stores/tags.ts"
import { type PropType } from "vue"

const props = defineProps({
  activityId: Number,
  activityName: String,
  activityLocation: String,
  activityDistance: Number,
  isFree:Boolean,
  activityTags: Array as PropType<Tag[]>
})

const eventLink = "/event/"+(props.activityId?.toString())

</script>

<template>
  <div>
    <h1>Activity Name: {{ activityName }}</h1>
    <p v-for="tag in activityTags">{{ Object.keys(tag!)[0] }}</p>

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
p{
  border: 5px grey solid;
  width: fit-content;
  display: inline-flex;
  padding: 5px;
  margin-right: 10px;
}
.price{
  float:right;
  text-align: right;
  font-size: 15px;
}
</style>