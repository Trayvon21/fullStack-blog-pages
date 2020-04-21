<template>
  <div class="flex flex-around a-center no-auth">
    <div class="left">
      <img class="pic" src="../../assets/imgs/404.gif" alt />
    </div>
    <div class="content">
      <h1>404</h1>
      <div class="text">
        <slot>很抱歉，该页面不存在</slot>
      </div>
      <el-button @click.native="$router.push('/')" size="small" type="primary">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Xind404",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.no-auth {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  height: 300px;
  white-space: nowrap;
  .left {
    animation: imgmove 0.8s linear;
    margin-right: 20px;
    img {
      width: 150px;
    }
  }
}
.content {
  animation: textmove 0.8s linear;
  h1 {
    margin-bottom: 10px;
    font-size: 30px;
  }
  .text {
    color: rgba(0, 0, 0, 0.45);
    margin-bottom: 10px;
  }
}

@keyframes textmove {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes imgmove {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
