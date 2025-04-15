<script setup lang="ts">


</script>

<template>
    
  <div>
    <!-- <button><RouterLink to="/events">Going Out?</RouterLink></button>
    <button><RouterLink to="/quiz/1">Retake the Quiz!</RouterLink></button>
    <button><RouterLink to="/crafts">Staying In?</RouterLink></button> -->

    <button class="footer"><RouterLink to="/quiz/1">Retake the Quiz!</RouterLink></button>
  </div>
</template>

<style scoped>

/* .footer{
  height: 45px;
  background: var(--c-teal);
  display: inline-block;
  align-items: left;
  justify-content: center;
  padding: 5px;
} */

.footer{
  font-weight: 700;
  font-style: italic;
  font-size: 35px;
}

.footer button{
  background: var(--c-teal);
  border: 5px var(--c-navy) solid;
  color: var(--c-orange);
  
  height:20%;

  font-size: 15px;
  font-weight: 700;

  margin-right: 10px;
  margin:5px;
}

div{
  width:100%;
  height: fit-content;
  display: inline-flex;
  padding: 5px;
  justify-content: center;
}
</style>