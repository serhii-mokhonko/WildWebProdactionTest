<template>
  <div id="app">
    <b-container fluid>
      <app-header></app-header>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    appHeader: Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700,700i|Play:400,700&display=swap&subset=cyrillic");
/* 
font-family: 'Play', sans-serif;
font-family: 'Open Sans', sans-serif;
 */
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Open Sans", sans-serif;
}
.container-fluid {
  padding: 0;
}

</style>
