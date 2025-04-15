<script setup lang="ts">
import { useRoute } from 'vue-router'
import {ref,watch, defineComponent, getCurrentInstance, onMounted } from 'vue'
import {getCraft, craftList, type Craft} from '@/stores/crafts.ts'
import { type Tag } from "@/stores/tags.ts"

const router = useRoute()

var craft: Craft
var craftId: number
var craftName: string
var craftMaterials: string[] 
var craftTags: string[]
var craftInstructs:string[]
var craftLink: string
var craftVid: string

const loading = ref(false)
const error = ref(null)

watch(() => router.params.id, fetchData, { immediate: true })

async function fetchData(id: string| string[] | number) {
  console.log(`The id passed in was: ${id}`)
  //const craftId: number = parseInt(id)
  id = parseInt(id.toString())
  craft = getCraft(id)!

  loading.value = true

  try {
    craftId = craft.craftId
    craftName = craft.craftName
    craftMaterials = craft.craftMaterials
    craftTags = craft.craftTags
    craftInstructs = craft.craftIntructs as string[]
    craftLink = craft.craftLink as string
    craftVid = craft.craftVid as string
  } catch {
    console.log("dang")
  } finally {
    loading.value = false
  } 
}
</script>

<template>
  <div class="wrapper">
    <button class="home-button"><RouterLink to="/home">Home</RouterLink></button>
    <h1>{{ craftName }}</h1>
    <h2>Materials:</h2> 

    <div class="crafts"><h3 class="tag" v-for = "craft in craftMaterials"> {{ craft }} </h3></div>
    <a v-if="craftLink" :href="craftLink"><h3>Learn More</h3></a>
    <a v-if="craftVid" :href="craftVid"><h3>Watch a video tutorial</h3></a>
    <h3 v-if="craftInstructs">Instructions:</h3>
    <p v-for=" step in craftInstructs">
      {{ step }}
    </p>
  </div>
</template>

<style scoped>
  .wrapper{
    margin-bottom: 20vh;
  }

  a{
    text-decoration: underline 5px var(--c-teal);
    background:var(--c-navy);
  }

  p{
    font-family: "bebas-neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
  }

  h1{
    font-size: 55px;
  }
  h2{
    font-size: 35px;
    margin:0;
    color: var(--c-teal);
  }
  h3{
    font-family: "charcuterie-block", sans-serif;
    font-weight: 800;
    color: var(--c-teal);
    font-size: 25px;
  }
  .crafts{
    display: flex;
    flex-wrap: wrap;
  }
  .crafts h3{
    color: white;
    font-size: 15px;
    margin-right:40px;
  }
</style>