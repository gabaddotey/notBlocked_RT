<script setup lang="ts">
import { type Tag } from "@/stores/tags.ts"
import { type PropType } from "vue"

const props = defineProps({
  activityId: Number,
  activityName: String,
  activityLocation: String,
  activityDistance: Number,
  isFree:Boolean,
  filterTags: Array,
  activityTags: Array
  // activityTags: Array as PropType<Tag[]>
})

const eventLink = "/event/"+(props.activityId?.toString())

</script>

<template>
  <Suspense>
  <div>
    <h1>{{ activityName }}</h1>
    <!-- <p v-for="tag in activityTags">{{ Object.keys(tag!)[0] }}</p> -->
    <p class="filterTag" v-for="tag in filterTags">{{ tag }}</p>
    <p class="tag" v-for="tag in activityTags">{{ tag }}</p>

    <h3>Distance: {{ activityDistance }}mi.</h3>
    <h4>{{ activityLocation }}</h4>
    <!-- <button><RouterLink :to= eventLink>Learn More</RouterLink></button> -->
    <!-- <h2 class="price">Free? {{ isFree }}</h2> -->
  </div>
  </Suspense>
</template>

<style>
  .tag{
    padding:8px;
    border: 5px var(--c-navy) solid;
    background: var(--c-teal);
    color:white;
  }
</style>

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

button *{
  color: var(--c-teal);
  padding: 14px;
}

.filterTag{
  padding:8px;
  background: var(--c-teal);
  border: 5px var(--c-navy) solid;
  box-shadow: -3px 3px var(--c-navy);
  color: var(--c-orange);
}

</style>