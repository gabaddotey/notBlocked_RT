<script setup lang="ts">
import MultiQuestion from '../components/MultiSelect.vue'

const oplist = ['qwerty','246','abc']

</script>

<template>

  <div>
    <h1>Q1</h1>
  
    <!--<MultiQuestion props.questiontitle="How are you?" :question-options="['good', 'bad']" next-question="/q2"/>-->
    <MultiQuestion id=1 :question-options = oplist next-question="???" ></MultiQuestion>
  </div>

</template>
