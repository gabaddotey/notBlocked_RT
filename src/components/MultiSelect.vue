<script setup lang="ts">
import {ref,watch, defineComponent, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getQuestion from '@/stores/questions.ts'


const router = useRoute()
console.log("This is the ROUTE id: "+router.params.id.toString())
const ID: number = parseInt(router.params.id.toString())

console.log("This is the question title: "+getQuestion(ID).questionTitle)


var questionTitle: string
var questionOptions: string[]
var nextQuestion: string
var backQuestion: string

const loading = ref(false)
const question = ref(null)
const error = ref(null)

watch(() => router.params.id, fetchData, { immediate: true })

async function fetchData(id: number) {
  const ID: number = parseInt(router.params.id.toString())

  error.value = question.value = null
  loading.value = true
  
  try {
    questionTitle = getQuestion(id).questionTitle
    questionOptions = getQuestion(id).questionOptions
    nextQuestion = "/quiz/"+(ID+1).toString()
    if(ID>0){
      backQuestion = "/quiz/"+(ID-1).toString()
    }
  } catch {
    console.log("dang")
  } finally {
    loading.value = false
  }
  
}

</script>

<template>
    <h1>Title:{{ questionTitle }}</h1>
    <h3>ID:{{ router.params.id }}</h3>
    <div class="wrapper" v-for="option in questionOptions">
      <input type="checkbox" value="{option}">{{ option }}</input>
    </div>
    <h3>This is the nextQuestion link: {{ nextQuestion }}</h3>
    <h3>This is the backQuestion link: {{ backQuestion }}</h3>

    <div>
      <button><RouterLink :to="nextQuestion">Next</RouterLink></button>
      <button v-if="router.params.id !== '0'"><RouterLink :to="backQuestion">Back</RouterLink></button>
      <button>Skip for now</button>
    </div>
</template>

<style scoped>

</style>