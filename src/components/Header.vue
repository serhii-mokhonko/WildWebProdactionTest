<template>
  <b-container fluid class="pb-5">
    <b-nav class="d-flex justify-content-around align-items-center">
      <b-nav-item active>Products</b-nav-item>
      <b-nav-item>How to detox</b-nav-item>
      <b-nav-item>
        <img src="../assets/mainlogo.png" alt="logo" srcset />
      </b-nav-item>
      <b-nav-item>Find a store</b-nav-item>
      <b-nav-item>FAQ</b-nav-item>
      <b-nav-item>
        <img src="../assets/Cart_full_action.png" alt="shopping cart" srcset />
      </b-nav-item>
    </b-nav>

    <b-row class="header__row m-0">
      <b-col class="d-flex flex-column justify-content-center header__col" cols="6">
        <h1>
          <span class="primary">Live fully</span>
          <br />Detox quickly
        </h1>
        <div class="header__btn-container">
          <b-button variant="success">Shop now</b-button>
          <b-button variant="outline-success">Find a store</b-button>
        </div>
      </b-col>
    </b-row>

    <b-row class="header__bottom d-flex justify-content-around align-items-center">
      <b-col class="header__bottom__col" cols="6">
        <h2>
          “Get clean when you
          need to be clean”
        </h2>
        <b-button variant="success" v-b-modal.modal-center>Help me find my detox</b-button>
      </b-col>
      <b-col class="header__bottom__col header__bottom__col--right" cols="6">
        <h3>Cleanse smart, the same day</h3>
        <p>
          Get rid of toxins quickly and safely so you can live fully again. How? With the herbal detox of choice for smart, fast cleansing. Proven by millions. Perfect for you.
          Now, let’s find exactly what you need.
        </p>
      </b-col>
      <img
        src="../assets/leaf-large.png"
        class="header__bottom__leaf-large paralax-element"
        alt="leaf"
        data-speed="10"
      />
      <img
        src="../assets/leaf-small.png"
        class="header__bottom__leaf-small paralax-element"
        alt="leaf"
        data-speed="5"
      />
    </b-row>
    <b-modal id="modal-center"  centered title="Get clean when you need to be clean">
      <p class="my-4">Here some content about this page!</p>
    </b-modal>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  padding: 0;
}

/* NAV */

.nav {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  height: 120px;
}
.nav-item a {
  color: #222222;
}

/* HEADER */

.header__row {
  height: 648px;
  background: url("../assets/happy-man.png") no-repeat;
  background-position-x: center;
}
.header__col {
  padding-left: 75px;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
}
.header__col h1 {
  font-family: "Play", sans-serif;
  font-weight: 700;
  font-size: 90px;
}

.header__btn-container {
  margin-top: 32px;
  width: 100%;
}

.primary {
  color: #41b24f;
}

/* header bottom  */

.header__bottom {
  font-family: "Open Sans", sans-serif;
  max-width: 1263px;
  height: 360px;
  /* padding: 0 100px; */
  margin: 50px auto;
  position: relative;
}

.header__bottom__col {
  text-align: center;
  max-width: 550px;
}

.header__bottom__col h2 {
  font-family: "Play", sans-serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 72px;
  color: #41b24f;
  margin-bottom: 57px;
}

.header__bottom__col--right {
  text-align: left;
}

.header__bottom__col h3 {
  font-weight: 700;
  max-width: 325px;
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 27px;
}

.header__bottom__col p {
  font-size: 14px;
}

.header__bottom__leaf-large {
  position: absolute;
  top: -50px;
  right: 0;
}

.header__bottom__leaf-small {
  position: absolute;
  bottom: 150px;
  left: 0;
}

/* buttons */

.btn {
  min-width: 190px;
  padding: 14px 55px;
  border-radius: 25px;
  margin-right: 30px;
}
</style>