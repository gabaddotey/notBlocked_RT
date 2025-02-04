<script setup lang="ts">
defineProps<{
  questionTitle: string,
  questionOptions: string[],
  nextQuestion: string
}>()
</script>

<template>
    <h1>{{questionTitle}}</h1>
    <div class="wrapper" v-for="option in questionOptions">
        <!-- <p>{{ option }}</p> -->
        <input type="checkbox" value="{option}">{{ option }}</input>
        
    </div>
  <div>
    <button><RouterLink :to="nextQuestion">Next</RouterLink></button>
    <button>Skip for now</button>
  </div>
</template>

<style scoped>

/* .wrapper{
    background-color: antiquewhite;
} */


</style>