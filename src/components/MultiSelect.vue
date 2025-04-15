<script setup lang="ts">
import {ref,watch, useTemplateRef } from 'vue'
import { useRoute } from 'vue-router'
import {getQuestion, questionList, getPreferencesForGemini, type Question} from '@/stores/questions.ts'
import {usePrefStore, type Answer} from '@/stores/preferences.ts'
import { onBeforeRouteLeave } from 'vue-router'

const router = useRoute()
const prefStore = usePrefStore()

var multiQuestion: boolean
var nextQuestion: string
var backQuestion: string
var question: Question

const loading = ref(false)
const error = ref(null)

const checkedAnswers = ref<string[]>([])

const singleAnswer = ref("")
const inputAnswer = ref("")

watch(() => router.params.id, fetchData, { immediate: true })

async function fetchData(id: string | string[]) {
  checkedAnswers.value = []
  singleAnswer.value = ""

  console.log("fetching data")
  
  watch(() => checkedAnswers.value, saveMultiAnswer)

  watch(() => singleAnswer.value, saveSingleAnswer)

  watch(() => inputAnswer.value, saveInputAnswer)

  if(typeof id !== 'string'){
    // Could redirect 
    console.log(`id was not a string: ${id}`)
    return;
  }

  const questionId: number = parseInt(id)
  question = getQuestion(questionId)!
  // console.log("question " + JSON.stringify(question))
  //boolean is undefined unles I put it here???
  // multiQuestion = question.type
  //error.value = question.value == null
  loading.value = true

  const answer = prefStore.getAnswer(questionId)
  // If answer is not undefined, that means they already answered it.
  // Put the answer in the checkedAnswers array

  //TODO: switch to use .isChecked
  if(answer?.multiAnswer){
    // console.log("this is a multiANsw"+ JSON.stringify(answer))
    checkedAnswers.value = answer.multiAnswer 
  }
  if(answer?.singleAnswer){
    // console.log("this is a single ans"+ JSON.stringify(answer))
    singleAnswer.value = answer.singleAnswer
  }
  if(answer?.inputAnswer){
    // console.log("this is a single ans"+ JSON.stringify(answer))
    inputAnswer.value = answer.inputAnswer
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

async function saveInputAnswer(ans: any) {
 
 try{
   // console.log(`saving... ${JSON.stringify(ans)}`)
   if(ans === ""){
     prefStore.removeAnswer(question.id)
     return
   }
   const answer:Answer = {inputAnswer: ans}
   prefStore.storeAnswer(question.id, answer)
   
 } catch {
   console.log("dang")
 }

}

async function saveMultiAnswer(ans: any) {

  try{
    // console.log(`saving... ${JSON.stringify(ans)}`)
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
  <div class="wrapper">
    <h5>Question {{router.params.id}}</h5>
    <h2>{{ question.questionTitle }}</h2>
    <!-- <h3>Path ID:{{ router.params.id }}</h3> -->
    <div class="options-wrapper">
      <div  class="options" v-if="question.type === 'multi'" v-for="option in question.questionOptions" >
        <input ref="option.id" type="checkbox" :id="option.value" :value="option.value" :checked="option.isChecked" v-model="checkedAnswers"></input>
        <label :for="option.value">{{ option.value }}</label>
      </div>

      <div class="options"  v-if="question.type === 'single'" v-for="option in question.questionOptions" >
        <input ref="option" :id="option.value" type="radio" :value="option.value" :checked="option.isChecked" v-model="singleAnswer"></input>
        <label :for="option.value">{{ option.value }}</label>
      </div>

      <div class="options"  v-if="question.type === 'input'">
        <input type="number" v-model="inputAnswer"></input>
      </div>
    </div>
    <!-- <h3>This is the nextQuestion link: {{ nextQuestion }}</h3>
    <h3>This is the backQuestion link: {{ backQuestion }}</h3> -->

    <div class="nav-buttons-wrapper">
      <button class="nav-buttons" v-if="nextQuestion !== '/quiz/'+(questionList.size+1)"><RouterLink :to="nextQuestion">Next</RouterLink></button>
      <button class="nav-buttons" v-if="backQuestion !== '/quiz/0'"><RouterLink :to="backQuestion">Back</RouterLink></button>
      <button class="nav-buttons" v-if="nextQuestion === '/quiz/'+(questionList.size+1)"><RouterLink to="/home">Done!</RouterLink></button>
    </div>
    <button class="footer" v-if="nextQuestion !== '/quiz/'+(questionList.size+1)"><RouterLink to="/home">Skip for now</RouterLink></button>

  </div>

    <!-- <div v-for = "answer in checkedAnswers">
      checked answer: {{ answer }}
    </div>
    <div v-if="singleAnswer">
      single answer: {{ singleAnswer }}
    </div> -->

</template>

<style>
  *{
    transition: all cubic-bezier(0.53, -0.19, 0.36, 1.08) .3s;
  }
  html{
    scroll-behavior: smooth;
  }

  h5, input[type="number"]{
    font-family: "bebas-neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 30px;
    margin: 0;
    color: var(--c-navy)
  }

  a, a:visited{
    text-decoration:none;
    color:inherit;
  }

  .footer{
    border: 0;
    position: fixed;
    bottom: 0vh;
    left: 0;
    width: 100vw;
    height: 60px;
    padding-left: 20px;
    margin-top: 10vh;
    text-align: left;
    background: var(--c-teal);
    color: var(--c-navy);

    clip-path: polygon(0 3%, 100% 16%, 100% 100%, 0 100%);
  }

  .footer a {
    width: 100%;
    display: block;
    padding: 0;
  }
</style>

<style scoped>


  body{
    display: flex;
    height:150%;
    overflow-y:scroll;
    margin: 0;
  }

  .wrapper{
      margin-bottom: 75px;
  }

  .options-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .nav-buttons-wrapper{
    place-self: center;
    margin: 5vh;
  }

  .nav-buttons{
    margin-right:15px;
    background: var(--c-teal);
    border: 5px var(--c-navy) solid;
    box-shadow: -5px 5px var(--c-navy);
    color: var(--c-orange);
    text-shadow: -3.5px 3px var(--c-navy),-2.5px 2.5px var(--c-navy),-2px 2px var(--c-navy),-1px 1px var(--c-navy);

    place-self: center;
  }

  h2{
    margin-right:50px;
    background: var(--c-teal);
    border: 5px var(--c-navy) solid;
    box-shadow: -5px 5px var(--c-navy);
    text-shadow: -3.5px 3px var(--c-navy),-2.5px 2.5px var(--c-navy),-2px 2px var(--c-navy),-1px 1px var(--c-navy);
    padding:20px;
    width:80vw;
  }

  .options{
    font-family: "bebas-neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 25px;
    padding-bottom: 10px;
  }

  button *{
    font-family: "charcuterie-block", sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 5ch;

  }

  input[type="radio"],input[type="checkbox"]{
    display:none;
  }

  input[type="number"]{
    border-style: none;
    text-align:center;
    padding-left:10px;
    width:70vw;
    height:10vh;
    color: white;
    clip-path: polygon(1% 5%, 98% 6%, 99% 94%, 3% 97%);
    background: var(--c-navy);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
  }
  /* Firefox arrow fix */
  input[type=number] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  input:checked + label{
    background:var(--c-dark-orange);
    scale: 105%;
  }

  label{
    display: inline-block;
    padding:20px;
    background: var(--c-navy);
    color: white;
    transition:all cubic-bezier(0.44, 0.02, 0.35, 1.01) .3s;
  }

  .wrapper .options:nth-child(2n-1) input + label{
    clip-path: polygon(1% 5%, 98% 6%, 99% 94%, 3% 97%);
    /* opacity: 10%; */
  }
  .wrapper .options:nth-child(2n) input + label{
    clip-path: polygon(0% 6%, 97% 10%, 98% 89%, 1% 94%);
  }

</style>