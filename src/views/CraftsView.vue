<script setup lang="ts">
import {getCraftList, getCraft} from '@/stores/crafts.ts'
import CraftPreview from '../components/CraftPreview.vue'

var craftList = getCraftList()


</script>

<template>
  <div class="wrapper">
    <h1 class="page-title">Staying In?</h1>

    <div v-for="craft in craftList">
      <CraftPreview :craftId= craft[1].craftId :craftName = craft[1].craftName 
      :craftMaterials = craft[1].craftMaterials
      :craftTags = craft[1].craftTags />
    </div>
  </div>
</template>