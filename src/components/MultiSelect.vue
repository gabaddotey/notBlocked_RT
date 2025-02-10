<script setup lang="ts">
import {ref,watch, defineComponent, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getQuestion from '@/stores/questions.ts'


const router = useRoute()
console.log("This is the route id: "+router.params.id.toString())
const ID: number = parseInt(router.params.id.toString())

console.log("This is the question title: "+getQuestion(ID).questionTitle)


var questionTitle: string
var questionOptions: string[]
var nextQuestion: string

const loading = ref(false)
const question = ref(null)
const error = ref(null)


function fetchData(id: number) {
  error.value = question.value = null
  loading.value = true
  
  try {
    questionTitle = getQuestion(id).questionTitle
    questionOptions = getQuestion(id).questionOptions
  } catch {
    console.log("dang")
  } finally {
    loading.value = false
  }
}

fetchData(ID)

</script>

<template>
    <h1>Title:{{ questionTitle }}</h1>
    <h3>ID:{{ router.params.id }}</h3>
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