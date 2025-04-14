<template>

  <img src="/src/assets/RTLogo.svg">
  <div>
    <button><RouterLink to="/quiz/1">Personalize</RouterLink></button>
    <button><RouterLink to="/home">Skip for now</RouterLink></button>
  </div>

</template>

<style>
  :root{
    --c-orange: #c47335;
    --c-tan: #dfddd0;
    --c-teal: #387a94;
    --c-navy: #215663;
  }

  body{
    background-color: #dfddd0;
    margin: 20px;
  }

  h1{
    font-family: "charcuterie-block", sans-serif; 
    font-style: italic;

    color: var(--c-orange);
  }

  h2{
    font-family: "charcuterie-block", sans-serif;
    font-style: italic;
    font-size: 45px;

    color: var(--c-orange)
  }

  button, button *{
    font-family: "charcuterie-block", sans-serif;
    text-decoration: none;
    border: 0;
    padding: 10px;
  }
</style>

<style scoped>
  img{
    width:80%;
  }

  button{
    width:90%;
    height:100px;

    background: var(--c-teal);
    /* transform: skew(-10deg); */
    perspective: 150px;
    margin:10%;
  }

  button *{
    font-family: "charcuterie-block", sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 5ch;
    
    color: var(--c-orange);

    text-decoration: none;
    text-shadow: black -4px 5px;

    width:100%;
    height:100%;    
  }

</style>
