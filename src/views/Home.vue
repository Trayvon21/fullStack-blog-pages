<template>
  <div class="home">
    <el-container ref="all_height">
      <el-header class="fixed" ref="theader">
        <t-header></t-header>
      </el-header>
      <el-container :style="{marginTop:headerHeight+'px'}" class="content-center">
        <el-row :gutter="10" style="width:100%" justify="space-around">
          <el-col :lg="18">
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-col>
          <el-col :lg="6" class="hidden-md-and-down">
            <el-aside>
              <asideMy></asideMy>
              <asideCharts></asideCharts>
              <friendlyLink></friendlyLink>
            </el-aside>
          </el-col>
        </el-row>
      </el-container>
      <el-footer>
        <t-footer>foot</t-footer>
      </el-footer>
      <back-top v-if="fixed" class="wraper" :percentage="percentage"></back-top>
    </el-container>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
import tFooter from "../components/common/TFooter";
import tHeader from "../components/common/THeader";
import backTop from "../components/common/BackTop";
import asideMy from "../components/aside/AsideMy";
import friendlyLink from "../components/aside/FriendlyLink";
import asideCharts from "../components/aside/AsideCharts";
export default {
  name: "Home",
  data() {
    return {
      fixed: false,
      headerHeight: 70
    };
  },
  components: {
    tFooter,
    tHeader,
    backTop,
    asideMy,
    friendlyLink,
    asideCharts
  },
  mounted() {
    this.$nextTick(() => {
      this.headerHeight = this.$refs.theader.$el.scrollHeight;
    });

    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
          this.fixed = true;
        } else {
          this.fixed = false;
        }
      },
      true
    );
  }
};
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  width: 100%;
  height: auto !important;
  padding: 0;
  background: white;
  border-bottom: 1px solid #eeeeee;
}
.fixed {
  position: fixed;
  z-index: 10;
}
.el-container {
  display: block !important;
  overflow: hidden;
}
.el-main {
  padding: 0;
  width: 100%;
}
.el-footer {
  height: 80px !important;
}
.wraper {
  z-index: 99;
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
