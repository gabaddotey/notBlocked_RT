<script setup lang="ts">
import MultiQuestion from '../components/MultiSelect.vue'
</script>

<template>

  <div>
    <h1>Q1</h1>
  
    <MultiQuestion question-title="How are you?" :question-options="['good', 'bad']" next-question="/q2"/>

  </div>

</template>
