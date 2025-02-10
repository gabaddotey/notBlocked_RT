<script setup lang="ts">
import MultiQuestion from '../components/MultiSelect.vue'
import { watch } from 'vue'
import { useRouter, type RouteParams } from 'vue-router'

const oplist = ['qwerty','246','abc']



</script>

<template>

  <div>
    <h1>Q1</h1>
    <h4>This is the param id {{ $route.params as RouteParams }}</h4>
    <!--<MultiQuestion props.questiontitle="How are you?" :question-options="['good', 'bad']" next-question="/q2"/>-->
    <!--<MultiQuestion :id=1 :question-options = oplist next-question="q2" ></MultiQuestion>-->
  </div>

</template>
