<script setup lang="ts">
import {ref,defineComponent, getCurrentInstance, onMounted } from 'vue'

let idCount = 1

/*const props = defineComponent({
  questionTitle: String,
  questionOptions: { type: Array, required: true },
  nextQuestion: String,
})
*/

const props = defineProps<{
  questionTitle: string
  questionOptions: () => string[]
  nextQuestion: string
  id: number
}>()

/*const instance = getCurrentInstance()
props.id = ref(instance?.uid)
console.log ("DEFAULT UID?? "+ instance?.uid)
console.log("THIS IS THE PROPS ID "+props.id)

idCount ++
console.log("THIS IS THE ID AFTERRR"+props.id)*/


</script>

<template>
    <h1>{{ questionTitle }}</h1>
    <h3>{{ id }}</h3>
    <div class="wrapper" v-for="option in questionOptions">
      <input type="checkbox" value="{option}">{{ option }}</input>
    </div>
    <h3>This is the nextQuestion value: {{ nextQuestion }}</h3>

    <div>
    <button><RouterLink :to="nextQuestion">Next</RouterLink></button>
    <button>Skip for now</button>
  </div>
</template>

<style scoped>

</style>