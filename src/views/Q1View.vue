<script setup lang="ts">
import MultiQuestion from '../components/MultiSelect.vue'
import {ref} from 'vue'

const questionList = ref([
  { id: 1, questionTitle: 'My journey with Vue' },
  { id: 2, questionTitle: 'Blogging with Vue' },
  { id: 3, questionTitle: 'Why Vue is so fun' }
])

const getOpList = () => [1, 2, 3, 4, 5]
const oplist = ref(getOpList())

</script>

<template>

  <div>
    <h1>Q1</h1>
  
    <!--<MultiQuestion props.questiontitle="How are you?" :question-options="['good', 'bad']" next-question="/q2"/>-->
    <MultiQuestion question-options= abc next-question="???" id=1></MultiQuestion>
  </div>

</template>
