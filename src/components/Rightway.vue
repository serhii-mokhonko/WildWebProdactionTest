<template>
  <b-container fluid class="block-detox my-5 position-relative">
    <b-row class="d-flex flex-column justify-content-center align-items-center w-100">
      <b-col class="block-title text-center px-5" cols="6">
        <h2>
          Why detox the
          Right way?
        </h2>
      </b-col>
    </b-row>
    <b-row class="block-content d-flex justify-content-between w-100 mx-auto">
      <b-col
        class="block-content__col text-center position-relative"
        v-for="item in why"
        cols="2"
        :key="item.id"
      >
        <div class="img__container">
          <img :src=" getImgUrl(item.iconUrl)" alt="icon" />
        </div>
        <p>{{item.content}}</p>
      </b-col>
    </b-row>
    <img src="../assets/leaf-large.png" class="leaf__right position-absolute" alt="leaf" />
    <img src="../assets/leaf-smal-2.png" class="leaf__left position-absolute" alt="leaf" />
    <img src="../assets/leaf-mini.png" class="leaf__bottom position-absolute" alt="leaf" />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      why: [
        {
          id: 0,
          iconUrl: "icon-leaf.png",
          content: "Natural ingredients and herbs work quickly"
        },
        {
          id: 1,
          iconUrl: "icon-person.png",
          content: "Bonus body benefits from essential nutrients"
        },
        {
          id: 2,
          iconUrl: "icon-bottle.png",
          content: "Many options to match what’s right for you"
        },
        {
          id: 3,
          iconUrl: "icon-number.png",
          content: "Backed by 30 years of detox expertise"
        },
        {
          id: 4,
          iconUrl: "icon-message.png",
          content: "Easy, step-by-step support"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    }
  }
};
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

.block-content {
  max-width: 1200px;
  padding: 90px 0;
}

.block-content__col {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
  color: #222222;
}

.img__container {
  display: inline-block;
  width: 56px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 2px solid #41b24f;
}

.leaf__right {
  top: 25%;
  right: 10%;
  transform: rotateX(-180deg);
}

.leaf__left {
  top: 35%;
  left: 10%;
  transform: rotate(205deg);
}

.leaf__bottom {
  bottom: 0;
  right: 35%;
}
</style>