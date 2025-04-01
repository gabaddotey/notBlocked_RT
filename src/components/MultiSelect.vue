<script setup lang="ts">
import {ref,watch, useTemplateRef } from 'vue'
import { useRoute } from 'vue-router'
import {getQuestion, type Question} from '@/stores/questions.ts'
import {usePrefStore, type Answer} from '@/stores/preferences.ts'
import { storeToRefs } from 'pinia'

const router = useRoute()
const prefStore = usePrefStore()

var multiQuestion: boolean
var nextQuestion: string
var backQuestion: string
var question: Question

const loading = ref(false)
const error = ref(null)

console.log("useprefstore: "+JSON.stringify(prefStore.preferences))
watch(() => prefStore.preferences, debuglog)

function debuglog(){
  console.log("prefStore changed")
  console.log(prefStore.$state)
}

const checkedAnswers = ref<string[]>([])
watch(() => checkedAnswers.value, saveMultiAnswer)

const singleAnswer = ref(null)
watch(() => singleAnswer.value, saveSingleAnswer)


watch(() => router.params.id, fetchData, { immediate: true })

async function fetchData(id: string | string[]) {
  checkedAnswers.value = []
  console.log("fetching data")

  if(typeof id !== 'string'){
    // Could redirect 
    console.log(`id was not a string: ${id}`)
    return;
  }

  const questionId: number = parseInt(id)
  question = getQuestion(questionId)!
  //boolean is undefined unles I put it here???
  // multiQuestion = question.type
  //error.value = question.value == null
  loading.value = true

  const answer = prefStore.getAnswer(questionId)
  // If answer is not undefined, that means they already answered it.
  // Put the answer in the checkedAnswers array
  if(answer?.multiAnswer){
    checkedAnswers.value = answer.multiAnswer
    
  }

  try {
    nextQuestion = "/quiz/"+(questionId+1).toString()
    if(questionId>=1){
      backQuestion = "/quiz/"+(questionId-1).toString()
    }
  } catch {
    console.log("dang")
  } finally {
    loading.value = false
  }
  
}

async function saveSingleAnswer(ans: any) {
  if (singleAnswer.value === null || singleAnswer.value["option"] === null) {
    console.log(`Dang singleAnswer is null`)
    return
  }
  const choice = singleAnswer.value["option"]
  const answer:Answer = {singleAnswer: choice}
  prefStore.storeAnswer(question.id, answer)
  
}

async function saveMultiAnswer(ans: any) {

  try{
    console.log(`saving... ${JSON.stringify(ans)}`)
    console.log("Question id in saveMultiAnswer: "+question.id)
    const answer:Answer = {multiAnswer: ans}
    prefStore.storeAnswer(question.id, answer)
    
  } catch {
    console.log("dang")
  }
  //checkedAnswers.value.splice(0)
  // call usePrefStore to save the answer
}

</script>

<template>
    <h1>Title:{{ question.questionTitle }}</h1>
    <h3>Path ID:{{ router.params.id }}</h3>
    
    <div class="wrapper" v-if="question.type === 'multi'" v-for="option in question.questionOptions" >
      <input ref="option.id" type="checkbox" :value="option.value" :checked="option.isChecked" v-model="checkedAnswers">{{ option.value }}</input>
    </div> 
    <div class="wrapper" v-else v-for="option in question.questionOptions" >
      <input ref="option" type="radio" :value="option.value" v-model="singleAnswer">{{ option.value }}</input>
    </div>

    <h3>This is the nextQuestion link: {{ nextQuestion }}</h3>
    <h3>This is the backQuestion link: {{ backQuestion }}</h3>

    <div>
      <button><RouterLink :to="nextQuestion">Next</RouterLink></button>
      <button v-if="backQuestion !== '/quiz/0'"><RouterLink :to="backQuestion">Back</RouterLink></button>
      <button><RouterLink to="/home">Skip for now</RouterLink></button>
    </div>

    <div v-for = "answer in checkedAnswers">
      checked answer: {{ answer }}
    </div>
</template>

<style scoped>

</style>