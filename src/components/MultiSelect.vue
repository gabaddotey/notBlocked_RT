<script setup lang="ts">
import {ref,watch, defineComponent, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getQuestion from '@/stores/questions.ts'
import {prefStore} from '@/stores/preferences.ts'


const router = useRoute()
// console.log("This is the ROUTE id: "+router.params.id.toString())
// const ID: number = parseInt(router.params.id.toString())

// console.log("This is the question title: "+getQuestion(ID).questionTitle)


var questionTitle: string
var questionOptions: string[]
var nextQuestion: string
var backQuestion: string
var question: string

const loading = ref(false)
const error = ref(null)

const checkedAnswers = ref([])
watch(() => checkedAnswers.value, saveAnswer)

watch(() => router.params.id, fetchData, { immediate: true })

async function fetchData(id: number) {
  console.log(`The id passed in was: ${id}`)
  const questionId: number = parseInt(id)
  question = getQuestion(questionId)!

  error.value = question.value == null
  loading.value = true

  const answer = prefStore.getAnswer(questionId)
  console.log(`Already answered?: ${answer}`)
  // If answer is not undefined, that means they already answered it.
  // Put the answer in the checkedAnswers array
  if(answer){
    //...
  }

  try {
    questionTitle = question.questionTitle
    questionOptions = question.questionOptions
    nextQuestion = "/quiz/"+(questionId+1).toString()
    if(id>0){
      backQuestion = "/quiz/"+(questionId-1).toString()
    }
  } catch {
    console.log("dang")
  } finally {
    loading.value = false
  }
  
}
async function saveAnswer(ans: any) {
  const answers = checkedAnswers.value.map(v => v["option"])
  console.log(`QuestionId: ${question.id}`)
  console.log(`Saving answers ${answers}`)

  // call prefstore to save the answer
}

</script>

<template>
    <h1>Title:{{ questionTitle }}</h1>
    <h3>Path ID:{{ router.params.id }}</h3>
    <div class="wrapper" v-for="option in questionOptions" key="option.id">
      <input type="checkbox" :value="{option}" v-model="checkedAnswers">{{ option }}</input>
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