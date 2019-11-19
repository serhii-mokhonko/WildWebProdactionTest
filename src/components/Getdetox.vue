<template>
  <b-container fluid class="block-detox my-5 position-relative">
    <b-row class="d-flex flex-column justify-content-center align-items-center w-100">
      <b-col class="block-title text-center my-4 px-5" cols="6">
        <h2>Get detox for your body and needs</h2>
        <p
          class="mx-5"
        >Our special blend of functional herbs and minerals is unique to us and essential for you to get the added nutrients your body needs during a rapid detox.</p>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center align-items-center">
      <b-col class="block-title text-center block-border px-5 pt-5 position-relative" cols="4">
        <h2 class="w-75 text-left mx-auto mx-5">Same-day detox, must-have nutrients</h2>
        <p
          class="w-75 text-left mx-auto"
        >Yes, your body gets rid of toxins on its own, but its process is complex and can take more than a day. Our unique mix of herbs and minerals kicks your body in gear to detox naturally and quickly…with extra benefits from essential minerals and vitamins. We get your body back to clean when you need it. Win. Win.</p>
        <b-button variant="success" class="btn-radius my-5">How to detox</b-button>
        <img src="../assets/leaf-large.png" class="position-absolute leaf-large" alt="leaf" />
        <img src="../assets/leaf-smal-2.png" class="position-absolute leaf-small" alt="leaf" />
      </b-col>
      <b-col class="h-100 pt-0" cols="4">
        <img src="../assets/lambert.png" class="w-100 h-auto mt-0" alt="image" />
        <img src="../assets/grace.png" class="img__rounded w-100 h-auto mt-5" alt="image" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.block-detox {
  background: #f1fbff;
}

.block-detox::before {
  content: "";
  width: 100%;
  height: 195px;
  background: url('../assets/wave-top.png') no-repeat;
  position: absolute;
  top: 7px;
  left: 0;
  transform: translateY(-100%);
  z-index: 10;
}

.block-detox::after {
  content: "";
  width: 100%;
  height: 195px;
  background: url('../assets/wave-bottom.png') no-repeat;
  position: absolute;
  bottom: 0px;
  left: 0;
  transform: translateY(100%);
  z-index: 10;
}

.block-title h2 {
  font-family: "Play", sans-serif;
  font-size: 52px;
  line-height: 72px;
  font-weight: 700;
}

.block-title p {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}

.block-border {
  border: 3px solid #41b24f;
  border-top-left-radius: 100px;
}

.btn-radius {
  width: 260px;
  min-width: 190px;
  padding: 14px 55px;
  border-radius: 25px;
}

.leaf-large {
  top: -90px;
  left: -20px;
  transform: rotate(-45deg);
}

.leaf-small {
  width: 112px;
  height: auto;
  top: 0px;
  left: 15px;
}

.img__rounded {
  border-bottom-right-radius: 100px;
}
</style>