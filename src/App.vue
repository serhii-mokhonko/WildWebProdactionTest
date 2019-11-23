<template>
  <div id="app">
    <b-container fluid class="m-0 p-0">
      <app-header></app-header>
      <app-get-detox></app-get-detox>
      <app-right-way></app-right-way>
      <app-success></app-success>
      <app-trusted></app-trusted>
      <app-finddetox></app-finddetox>
      <app-faq></app-faq>
      <app-footer></app-footer>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import GetDetox from "./components/Getdetox.vue";
import RightWay from "./components/Rightway.vue";
import Success from "./components/Success.vue";
import Trusted from "./components/Trusted.vue";
import Finddetox from "./components/Finddetox.vue";
import Faq from "./components/Faq.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    appHeader: Header,
    appGetDetox: GetDetox,
    appRightWay: RightWay,
    appSuccess: Success,
    appTrusted: Trusted,
    appFinddetox: Finddetox,
    appFaq: Faq,
    appFooter: Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700,700i|Play:400,700&display=swap&subset=cyrillic");

#app {
  font-family: "Open Sans", sans-serif;
}


/* LINK  */

.link {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #41b24f;
  padding-right: 42px;
}


.link a {
  color: #41b24f;
  transition: 0.7s ease-out 0.1s;
}

.link:hover, .link a:hover {
  color: #218838;
  text-decoration: none !important;
}

/* link to right */
.link-to-right {
  display: inline-block;
  position: relative;
  transition: 0.7s ease-out 0.1s;
}

.link-to-right:hover {
  padding-left: 42px;
  padding-right: 0;
}

/* before */
.link a::before {
  display: inline-block;
  content: "";
  width: 0px;
  height: 2px;
  background-color: #41b24f;
  position: absolute;
  top: 50%;
  left: 0;
  transition: 0.7s ease-out 0.1s;
}

.link a:hover::before {
  content: "";
  width: 22px;
  background-color: #218838;
}

/* after */
.link a::after {
  display: inline-block;
  content: "";
  width: 22px;
  height: 2px;
  background-color: #41b24f;
  position: absolute;
  top: 50%;
  right: 0;
  transition: 0.7s ease-out 0.1s;
}

.link a:hover::after {
  content: "";
  width: 0px;
  background-color: #218838;
}

/* LINK END */
</style>
