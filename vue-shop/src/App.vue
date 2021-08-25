<template>
  <Header />
</template>

<script>

import Header from './components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&family=Lato:wght@300;400;700&family=Spartan:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;

}
</style>
