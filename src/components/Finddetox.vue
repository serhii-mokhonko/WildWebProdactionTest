<template>
  <b-container fluid class="block-detox my-5 position-relative">
    <b-row class="d-flex flex-column justify-content-center align-items-center w-100">
      <b-col class="block-title text-center px-5" cols="6">
        <h2>Let’s find the detox for your body</h2>
        <p
          class="mx-5"
        >Our special blend of functional herbs and minerals is unique to us and essential for you to get the added nutrients your body needs during a rapid detox.</p>
      </b-col>
    </b-row>
    <img src="../assets/leaf-large.png" class="leaf__left position-absolute paralax-element" alt="leaf" data-speed="7"/>
    <img src="../assets/leaf-smal-2.png" class="leaf__right position-absolute paralax-element" alt="leaf" data-speed="4"/>
    <img src="../assets/leaf-mini.png" class="leaf__bottom position-absolute paralax-element" alt="leaf" data-speed="12"/>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.block-title {
  margin-top: 180px;
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
  line-height: 24px;
  margin-top: 40px;
}

.leaf__right {
  top: 0;
  right: 15%;
}

.leaf__left {
  top: 0;
  left: 20%;
  transform: rotate(90deg);
}

.leaf__bottom {
  bottom: 10%;
  left: 20%;
}
</style>