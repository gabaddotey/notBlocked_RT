<script setup lang="ts">
import {getCraftList, getCraft} from '@/stores/crafts.ts'
import CraftPreview from '../components/CraftPreview.vue'

var craftList = getCraftList()

</script>

<template>
  <h1>Crafts</h1>

  <div v-for="craft in craftList">
    <CraftPreview :craftId= craft[1].craftId :craftName = craft[1].craftName 
    :craftMaterials = craft[1].craftMaterials :craftTime = craft[1].craftTime /> 
  </div>

</template>