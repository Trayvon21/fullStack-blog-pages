<template>
  <div class="wraper" @click="backtop">Top</div>
</template>

<script>
export default {
  name: "BackTop",
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  },
  methods: {
    backtop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped lang="scss">
.wraper {
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  background: green;
}
</style>