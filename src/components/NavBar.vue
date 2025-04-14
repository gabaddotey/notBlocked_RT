<script setup lang="ts">


</script>

<template>
    
  <div class="footer">
    <button><RouterLink to="/events">Going Out?</RouterLink></button>
    <button><RouterLink to="/quiz/1">Retake the Quiz!</RouterLink></button>
    <button><RouterLink to="/crafts">Staying In?</RouterLink></button>
  </div>
</template>

<style scoped>

.footer{
  height: 30px;
  background: var(--c-teal);
  display: inline-block;
  align-items: left;
  justify-content: center;
  padding: 5px;
}

.footer button{
  background-color: var(--c-navy);
  color: var(--c-orange);
  font-size: 15px;
  margin-right: 10px;
}

div{
  width:100%;
  height: fit-content;
  background-color:grey;
  display: inline-flex;
  padding: 5px;
  justify-content: center;
}
</style>