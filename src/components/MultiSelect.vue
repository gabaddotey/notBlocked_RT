<script setup lang="ts">
import {ref,watch, useTemplateRef } from 'vue'
import { useRoute } from 'vue-router'
import {getQuestion, questionList, getPreferencesForGemini, type Question} from '@/stores/questions.ts'
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

const singleAnswer = ref("")


watch(() => router.params.id, fetchData, { immediate: true })

async function fetchData(id: string | string[]) {
  checkedAnswers.value = []
  singleAnswer.value = ""

  console.log("fetching data")
  
  watch(() => checkedAnswers.value, saveMultiAnswer)

  watch(() => singleAnswer.value, saveSingleAnswer)

  if(typeof id !== 'string'){
    // Could redirect 
    console.log(`id was not a string: ${id}`)
    return;
  }

  const questionId: number = parseInt(id)
  question = getQuestion(questionId)!
  console.log("question " + JSON.stringify(question))
  //boolean is undefined unles I put it here???
  // multiQuestion = question.type
  //error.value = question.value == null
  loading.value = true

  const answer = prefStore.getAnswer(questionId)
  // If answer is not undefined, that means they already answered it.
  // Put the answer in the checkedAnswers array

  //TODO: switch to use .isChecked
  if(answer?.multiAnswer){
    console.log("this is a multiANsw"+ JSON.stringify(answer))
    checkedAnswers.value = answer.multiAnswer 
  }
  if(answer?.singleAnswer){
    console.log("this is a single ans"+ JSON.stringify(answer))
    singleAnswer.value = answer.singleAnswer
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
 
  try{
    // console.log(`saving... ${JSON.stringify(ans)}`)
    console.log("Question id in saveSingleAnswer: "+question.id)
    if(ans === ""){
      prefStore.removeAnswer(question.id)
      return
    }
    const answer:Answer = {singleAnswer: ans}
    prefStore.storeAnswer(question.id, answer)
    
  } catch {
    console.log("dang")
  }

}

async function saveMultiAnswer(ans: any) {

  try{
    // console.log(`saving... ${JSON.stringify(ans)}`)
    console.log("Question id in saveMultiAnswer: "+question.id)
    const answer:Answer = {multiAnswer: ans}
    //TODO: remove if empty
    console.log(JSON.stringify(answer)+" (Multi) this is: answer")
    prefStore.storeAnswer(question.id, answer)
  } catch {
    console.log("dang")
  }
  //Answers.value.splice(0)
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
      <input ref="option" type="radio" :value="option.value" :checked="option.isChecked" v-model="singleAnswer">{{ option.value }}</input>
    </div>

    <h3>This is the nextQuestion link: {{ nextQuestion }}</h3>
    <h3>This is the backQuestion link: {{ backQuestion }}</h3>

    <div>
      <button v-if="nextQuestion !== '/quiz/'+(questionList.size+1)"><RouterLink :to="nextQuestion">Next</RouterLink></button>
      <button v-if="backQuestion !== '/quiz/0'"><RouterLink :to="backQuestion">Back</RouterLink></button>
      <button v-if="nextQuestion !== '/quiz/'+(questionList.size+1)"><RouterLink to="/home">Skip for now</RouterLink></button>
      <button v-if="nextQuestion === '/quiz/'+(questionList.size+1)"><RouterLink to="/home">Sumbit!</RouterLink></button>
    </div>

    <div v-for = "answer in checkedAnswers">
      checked answer: {{ answer }}
    </div>
    <div v-if="singleAnswer">
      single answer: {{ singleAnswer }}
    </div>
</template>

<style scoped>

</style>