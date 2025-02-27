<script setup lang="ts">


</script>

<template>
    
  <div>
    <button><RouterLink to="/home">Home</RouterLink></button>
    <button><RouterLink to="/home">Going Out?</RouterLink></button>
    <button><RouterLink to="/home">Staying In?</RouterLink></button>
  </div>
</template>

<style scoped>
div{
  width:100%;
  height: fit-content;
  background-color:grey;
  display: inline-flex;
  padding: 5px;
  justify-content: center;
}
</style>