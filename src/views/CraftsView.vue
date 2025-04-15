<script setup lang="ts">
import {getCraftList, getCraft} from '@/stores/crafts.ts'
import CraftPreview from '../components/CraftPreview.vue'

var craftList = getCraftList()


</script>

<template>
  <div class="wrapper">
    <button class="home-button"><RouterLink to="/home">Home</RouterLink></button>
    <h1 class="page-title">Staying In?</h1>

    <div v-for="craft in craftList">
      <CraftPreview :craftId= craft[1].craftId :craftName = craft[1].craftName 
      :craftMaterials = craft[1].craftMaterials
      :craftTags = craft[1].craftTags :needsButton="craft[1].needsButton"/>
    </div>
  </div>
</template>