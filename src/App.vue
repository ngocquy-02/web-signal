<template>
  <TheHeader/>
  
  <router-view/>

  <TheFooter/>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';


export default {
  name: "App",
  components: {TheHeader, TheFooter}
}
</script>

<style>
  /* * {
    font-family: 'Inter', sans-serif ;
  } */
  body {
    color: #1b1b1b;
    font-family: Inter, sans-serif;
    overflow-x: hidden;
}
</style>
