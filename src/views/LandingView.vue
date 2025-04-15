<template>
  <div class="wrapper">
    <img src="/src/assets/RTLogo.svg">
    <div>
      <button><RouterLink to="/quiz/1">Personalize</RouterLink></button>
      <button><RouterLink to="/home">Skip for now</RouterLink></button>
    </div>
  </div>
</template>

<style>
  :root{
    --c-orange: #c47335;
    --c-dark-orange: #bc5f3b;
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

  .wrapper{
    display: grid;
    align-items:center;
  }

  img{
    width:85%;
    padding-top: 30px;
    place-self: center;
  }

  button{
    transition: all cubic-bezier(0.26, 0.11, 0, 1.46) .4s;
    justify-self: center;
    display:flex;
    width: 70vw;
    height:fit-content;

    background: var(--c-teal);
    transform: skew(-12deg);
    clip-path: polygon(0% 6%, 97% 10%, 98% 94%, 1% 94%);
    margin:5%;
  }

  button:nth-child(2){
    clip-path: polygon(1% 5%, 98% 6%, 99% 94%, 3% 97%);
  }

  button:hover{
    box-shadow: var(--c-navy) -10px 10px;
    scale: 97%;
    
  }

  button *{
    font-family: "charcuterie-block", sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 350%;
    align-self: center;
    justify-self: center;
    text-align:center;
    color: var(--c-orange);

    text-decoration: none;
    text-shadow: var(--c-navy) -4px 2px, var(--c-navy) -8px 4px;
  }

  button a{
    width: 100%;
    height: 100%;
    transform: skew(12deg);
    display: block;
    align-content: center;
    padding:15px;
    color: var(--c-orange);
    
  }
  
</style>