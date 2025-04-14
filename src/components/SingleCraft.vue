<script setup lang="ts">
import { useRoute } from 'vue-router'
import {ref,watch, defineComponent, getCurrentInstance, onMounted } from 'vue'
import {getCraft, craftList, type Craft} from '@/stores/crafts.ts'
import { type Tag } from "@/stores/tags.ts"

const router = useRoute()

var craftId: number
var craftName: string
var craftMaterials: string[] 
var craftTags: string[]
var craft: Craft

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
  } catch {
    console.log("dang")
  } finally {
    loading.value = false
  } 
}
</script>

<template>
  <div class="wrapper">
    <h1>Craft Name: {{ craftName }}</h1>
    <h2>Materials:</h2> <h3 v-for = "craft in craftMaterials"> {{ craft }} </h3>
  </div>
</template>

<style scoped>
  .wrapper{
    margin-bottom: 75px;
  }
  
  h1{
    font-size: 50px;
  }
  h2{
    font-size: 40px;
  }
  h3{
    font-family: "charcuterie-block", sans-serif;
    font-weight: 800;
    color: var(--c-teal);
    font-size: 25px;
  }

</style>