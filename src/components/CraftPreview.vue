<script setup lang="ts">
import { type Tag } from "@/stores/tags.ts"
import { type PropType } from "vue"

const props = defineProps({
  craftId: Number,
  craftName: String,
  //craftMaterials: String[], //Or tags??
  craftTime: Number,
  craftTags: Array as PropType<string[]>
})

const craftLink = "/craft/"+(props.craftId?.toString())

</script>

<template>
  <div>
    <h1>{{ craftName }}</h1>
    <p v-for="tag in craftTags" class="tag">{{ tag }}</p>
    </br>
    <button><RouterLink :to=craftLink>Let's Do It!</RouterLink></button>
  </div>
</template>

<style scoped>
div{
  border: 5px var(--c-teal) solid;
  box-shadow: -8px 8px var(--c-navy);
  padding: 10px;
  font-weight: 800;
  margin-bottom: 20px;
}
h1{
  font-family: "charcuterie-block", sans-serif;
  font-weight: 800;
  font-size: 45px;
}
h3{
  font-family: "charcuterie-block", sans-serif;
  font-weight: 800;
  color: var(--c-navy);
  font-size: 25px;
}
h4{
  font-family: "charcuterie-block", sans-serif;
  font-weight: 800;
  font-style: italic;
  color: var(--c-orange);
}
p{
  width: fit-content;
  display: inline-flex;
  padding: 5px;
  margin:5px;

  font-family: "bebas-neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
}

button{
  float: right;
  width:35%;
  background: var(--c-orange);
  color:white;
}

button *{
  color: white;
  font-size: 25px;
  padding: 14px;
}
</style>