<template>
  <div>
    <div class="swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in hot_arts" :key="item._id">
          <div class="article-each" @click="gotoDetail(item._id)">
            <div class="article-pic">
              <img class="article-pic" src="../../assets/imgs/hots.jpeg" alt />
            </div>
            <div class="title txt-hidden">{{item.title}}</div>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-bottom"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  methods: {
    ...mapActions(["getHotArt"]),
    setSwiper() {
      var swipes = new Swiper(".swiper-container1", {
        slidesPerView: 1,
        spaceBetween: 10,
        // init: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          399: {
            slidesPerView: 1,
            spaceBetween: 100
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      });
      swipes;
    },
    gotoDetail(id) {
      this.$router.push(`/articleDetail?id=${id}`);
    }
  },
  mounted() {
    this.getHotArt().then(() => {
      this.setSwiper();
    });
  },
  computed: {
    ...mapState(["hot_arts"])
  }
};
</script>

<style lang="scss" scoped>
.swiper-container1 {
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  //   height: 100px;
  /* Center slide text vertically */
  //   display: -webkit-box;
  //   display: -ms-flexbox;
  //   display: -webkit-flex;
  //   display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   -webkit-align-items: center;
  //   align-items: center;
}
.swiper-bottom {
  bottom: 0;
  position: absolute;
}
.article-each {
  padding: 20px;
  white-space: nowrap;
  .article-pic {
    width: 100%;
    margin: 0 auto;
    border-radius: 5px;
  }
  .title {
    // text-align: left;
    font-size: 14px;
  }
}
</style>