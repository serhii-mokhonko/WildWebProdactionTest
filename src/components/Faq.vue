<template>
  <b-container fluid class="block-detox position-relative">
    <b-row class="w-100 mx-auto d-flex flex-column">
      <b-col class="faq-block py-3 position-relative col-sm-12 col-lg-9 mx-auto">
        <h3>When do you need to be clean?</h3>
        <a href="#">
          <svg class="arrow arrow-bottom">
            <use xlink:href="../assets/arrow.svg#arrow-small" />
          </svg>
        </a>
      </b-col>
      <b-col class="faq-block py-3 position-relative col-sm-12 col-lg-9 mx-auto">
        <h3>What’s your toxin exposure?</h3>
        <a href="#">
          <svg class="arrow arrow-bottom">
            <use xlink:href="../assets/arrow.svg#arrow-small" />
          </svg>
        </a>
      </b-col>
      <b-col class="faq-block py-3 position-relative col-sm-12 col-lg-9 mx-auto">
        <h3>What’s your body weight?</h3>
        <a href="#">
          <svg class="arrow arrow-bottom">
            <use xlink:href="../assets/arrow.svg#arrow-small" />
          </svg>
        </a>
      </b-col>
      <b-col class="faq-block py-3 position-relative col-sm-12 col-lg-9 mx-auto">
        <h3>More needs</h3>
        <p>As a beverage, as pills, sugar free</p>
        <a href="#">
          <svg class="arrow arrow-bottom">
            <use xlink:href="../assets/arrow.svg#arrow-small" />
          </svg>
        </a>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mx-auto text-center">
        <b-button variant="success" class="btn-radius mt-5">Show 16 matching products</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.block-detox {
  background: #f1fbff;
  margin-top: 180px;
}

.block-detox::before {
  content: "";
  width: 100%;
  height: 195px;
  background: url("../assets/wave-top.png") no-repeat;
  position: absolute;
  top: 7px;
  left: 0;
  transform: translateY(-100%);
  z-index: 10;
}

.faq-block h3 {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
}

.faq-block.col {
  border-bottom: 1px solid #41b24f;
  height: 75px;
}

.faq-block.col:last-child {
  border-bottom: none;
}

.block-detox::after {
  content: "";
  width: 100%;
  height: 195px;
  background: url("../assets/wave-bottom.png") no-repeat;
  position: absolute;
  bottom: 0px;
  left: 0;
  transform: translateY(100%);
  z-index: 10;
}

.btn-radius {
  width: 300px;
  min-width: 190px;
  padding: 11px 0px;
  border-radius: 25px;
}

.arrow {
  height: 25px;
  width: 15px;
  fill: #41b24f;
  position: absolute;
  right: 35px;
  bottom: 18px;
}

.arrow:hover {
  fill: #218838;
}

.arrow-bottom {
  transform: rotate(90deg);
}
</style>