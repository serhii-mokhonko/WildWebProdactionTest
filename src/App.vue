<template>
  <div id="app">
    <b-container fluid class='m-0 p-0'>
      <app-header></app-header>
      <app-get-detox></app-get-detox>
      <app-right-way></app-right-way>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
import GetDetox from "./components/Getdetox.vue";
import RightWay from "./components/Rightway.vue";

export default {
  name: "app",
  components: {
    appHeader: Header,
    appGetDetox: GetDetox,
    appRightWay: RightWay
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700,700i|Play:400,700&display=swap&subset=cyrillic");
/* 
font-family: 'Play', sans-serif;
font-family: 'Open Sans', sans-serif;
 */
#app {
  font-family: "Open Sans", sans-serif;
}
</style>
