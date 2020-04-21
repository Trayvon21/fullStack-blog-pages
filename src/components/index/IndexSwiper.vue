<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in 10" :key="item">
          <img src="../../assets/imgs/swiper.jpeg" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Pagination -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  methods: {
    get() {
      var swiper = new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
      swiper;
    }
  },
  mounted() {
    this.get();
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  border-radius: 10px;
  //   height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
  position: relative;
  img {
    width: 100%;
  }
}
.gallery-top {
  height: 80%;
  width: 100%;
}
.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
.swiper-button-next,
.swiper-button-prev {
  color: #ededed20;
  &:hover {
    color: #ededed80;
  }
}
</style>