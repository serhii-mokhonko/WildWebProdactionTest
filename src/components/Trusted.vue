<template>
  <b-container fluid class="my-5 position-relative">
    <b-row class="d-flex flex-column justify-content-center align-items-center w-100">
      <b-col class="block-title text-center my-4">
        <h2>Trusted detox for 30 years</h2>
      </b-col>
    </b-row>

    <b-row class="d-flex justify-content-center align-self-stretch w-75 mx-auto">
      <b-col
        class="block-content text-center block-border block-border--rounded-top-left position-relative"
      >
        <p
          class="w-75 text-left"
        >We’re known for the last 30 years for creating some of the best, herbal detox and cleansing products available. Hands down. Every product you use is formulated by a team of expert nutritionists and chemists to kick your body’s natural elimination process into high gear. Quickly and safely.</p>
        <img src="../assets/leaf-large.png" class="position-absolute leaf-large" alt="leaf" />
        <img src="../assets/leaf-smal-2.png" class="position-absolute leaf-small" alt="leaf" />
      </b-col>

      <b-col class="block-content block-border ml-4">
        <h3 class="w-75 text-left">100% satisfaction, guaranteed</h3>
        <p
          class="w-75 text-left"
        >If you’re not satisfied with your product for any reason, we’ll send you a refund.</p>
        <div class="link link-to-right">
          <a href="#">Learn more</a>
        </div>
      </b-col>
    </b-row>

    <b-row class="w-75 mx-auto">
      <b-col class="d-flex justify-content-center p-0">
        <img src="../assets/detox-food.png" class="img__rounded img-block mt-4" alt="images">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.block-title h2{
  margin-top: 230px;
  margin-bottom: 100px;
  font-family: "Play", sans-serif;
  font-size: 52px;
  font-weight: 700;
}

.block-content {
  padding: 70px 0px 70px 110px;
}

.block-content h2 {
  font-family: "Play", sans-serif;
  font-size: 52px;
  font-weight: 700;
}

.block-content h3 {
  font-family: "Play", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
}

.block-border {
  border: 3px solid #41b24f;
}

.block-border--rounded-top-left {
  border-top-left-radius: 100px;
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

a.txt-success {
  color: #41b24f;
  text-decoration: none;
  position: relative;
}

a.txt-success:hover {
  color: #218838;
}

.txt-success--line::after {
  content: "";
  position: absolute;
  right: -40px;
  top: 50%;
  height: 2px;
  width: 22px;
  border-bottom: 2px solid #41b24f;
}

.img__rounded {
  border-bottom-right-radius: 100px;
}

.img-block{
  width: 100%;
  height: auto;
}
</style>