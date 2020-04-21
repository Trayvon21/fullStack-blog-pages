<template>
  <div>
    <el-card class="txt-center">
      <div class="flex jc-center">
        <img class="my-pic" src="@/assets/imgs/logo.jpg" alt />
      </div>
      <div class="my-name">Trayvon21</div>
      <div class="my-desc">前端开发新手</div>
      <el-divider>社交账号</el-divider>
      <div class="flex a-center jc-around">
        <div @click="gotoGithub">
          <el-tooltip class="item" effect="dark" content="Trayvon21" placement="top">
            <i class="iconfont icon-github"></i>
          </el-tooltip>
        </div>
        <div>
          <el-tooltip class="item" effect="dark" content="718869429" placement="top">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=718869429&site=qq&menu=yes">
              <i class="iconfont icon-qq"></i>
            </a>
          </el-tooltip>
        </div>
        <div @click="showWechat">
          <i class="iconfont icon-wechat" style="color:gray;cursor:not-allowed"></i>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "AsideMy",
  methods: {
    gotoGithub() {
      window.open("https://github.com/Trayvon21", "_blank");
    },
    showWechat() {
      this.$notify.info({
        title: "对不起",
        message: "暂不提供微信号"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin: 10px 0;
  .my-pic {
    width: 100px;
    height: 100px;
  }
  .my-name {
    font-size: 20px;
    margin-top: 10px;
    color: skyblue;
  }
  .my-desc {
    font-size: 14px;
    margin: 20px;
    color: gray;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .iconfont {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>