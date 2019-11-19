<template>
  <b-container fluid class="block-detox my-5 position-relative">
    <b-row class="d-flex flex-column justify-content-center align-items-center w-100 mb-5">
      <b-col class="block-title text-center my-4 px-5" cols="6">
        <h2>Proven success, well said</h2>
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-around">
      <b-col v-for="user in users.slice(0, 4)" :key="user.id" class="col-sm-6 col-lg-3">
        <div class="user__info d-flex align-items-start w-100">
          <img class="avatar mb-2" :src="getImgUrl(user.urlAvatar)" alt="face" />
          <div class="user__name ml-3">
            <h3>{{user.name}}</h3>
            <h4>About QCarbo16</h4>
          </div>
        </div>
        <div class="raiting">
          <img
            src="../assets/star.png"
            v-for="star in user.raiting"
            :key="'star_'+star"
            class="mr-2"
            alt="star"
          />
          <img
            src="../assets/star.png"
            v-for="disStar in calcRaiting(user.raiting)"
            :key="disStar"
            class="mr-2 star__disabled"
            alt="star"
          />
        </div>
        <p class="mt-4">
          {{user.comment.slice(0, 250)}}
          <a
            href="#"
            class="txt-success"
            v-if="user.comment.length > 250"
          >...Read more</a>
        </p>
        <a href="#" class="txt-success txt-success--line">More about QCarbo 16</a>
      </b-col>
      <b-col class="block-detox__nav d-flex align-self-center" cols="1">
        <a href="#">
          <svg class="arrow arrow-back arrow--disabled">
            <use xlink:href="../assets/arrow.svg#arrow" />
          </svg>
        </a>
        <hr class="vertical-line" />
        <a href="#">
          <svg class="arrow">
            <use xlink:href="../assets/arrow.svg#arrow" />
          </svg>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 0,
          name: "John Dou",
          comment:
            "Any one who says this product doesnt work doesnt read instructions i use it often and found my own method thats works 100% take 12 to 14 hours before test fill jug back up with water after using and pee as often as u can. Keep hydrating urself. Try to pee 4-5 times before test",
          raiting: 4,
          urlAvatar: "face-1.png"
        },
        {
          id: 1,
          name: "Lilu Dallas",
          comment:
            "Any one who says this product doesnt work doesnt read instructions i use it often and found my own method thats works 100% take 12 to 14 hours before test fill jug back up with water after using and pee as often as u can.",
          raiting: 3,
          urlAvatar: "face-2.png"
        },
        {
          id: 2,
          name: "AbimbolaRich child",
          comment:
            "Any one who says this product doesnt work doesnt read instructions i use it often and found my own method.",
          raiting: 5,
          urlAvatar: "face-3.png"
        },
        {
          id: 3,
          name: "John Dou",
          comment:
            "Any one who says this product doesnt work doesnt read instructions i use it often and found my own method thats works 100% take 12 to 14 hours before test fill jug back up with water after using and pee as often as u can. Keep hydrating urself. Try to pee 4-5 times before test",
          raiting: 4,
          urlAvatar: "face-4.png"
        },
        {
          id: 4,
          name: "John Dou",
          comment:
            "Any one who says this product doesnt work doesnt read instructions i use it often and found my own method thats works 100% take 12 to 14 hours before test fill jug back up with water after using and pee as often as u can. Keep hydrating urself. Try to pee 4-5 times before test",
          raiting: 5,
          urlAvatar: "face-3.png"
        },
        {
          id: 5,
          name: "AbimbolaRich child",
          comment:
            "Any one who says this product doesnt work doesnt read instructions i use it often and found my own method thats works 100% take 12 to 14 hours before test fill jug back up with water after using and pee as often as u can. Keep hydrating urself. Try to pee 4-5 times before test",
          raiting: 3,
          urlAvatar: "face-2.png"
        },
        {
          id: 6,
          name: "John Dou",
          comment:
            "Any one who says this product doesnt work doesnt read instructions i use it often and found my own method thats works 100% take 12 to 14 hours before test fill jug back up with water after using and pee as often as u can. Keep hydrating urself. Try to pee 4-5 times before test",
          raiting: 2,
          urlAvatar: "face-1.png"
        },
        {
          id: 7,
          name: "Lilu Dallas",
          comment:
            "Any one who says this product doesnt work doesnt read instructions i use it often and found my own method thats works 100% take 12 to 14 hours before test fill jug back up with water after using and pee as often as u can. Keep hydrating urself. Try to pee 4-5 times before test",
          raiting: 1,
          urlAvatar: "face-3.png"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    calcRaiting(stars) {
      return 5 - stars;
    }
  }
};
</script>

<style scoped>
.block-detox {
  background: #f1fbff;
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

.block-title h2 {
  font-family: "Play", sans-serif;
  font-size: 52px;
  line-height: 72px;
  font-weight: 700;
}

.avatar {
  width: 72px;
  height: 72px;
  overflow: hidden;
}

.user__name h3 {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1d2f1f;
}

.user__name h4 {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #c4c4c4;
}

.raiting {
  text-align: left;
}

.star__disabled {
  opacity: 0.2;
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

.block-detox__nav {
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 15;
}

.vertical-line {
  width: 48px;
  background: #41b24f;
  border: 1px solid #41b24f;
  transform: rotate(90deg);
}

.arrow {
  height: 27px;
  width: 17px;
  fill: #41b24f;
}

.arrow:hover {
  fill: #218838;
}

.arrow-back {
  transform: rotate(180deg);
}

.arrow--disabled {
  opacity: 0.3;
}
</style>