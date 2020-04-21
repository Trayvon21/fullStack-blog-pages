<template>
  <div>
    <div style="margin:10px">
      <el-alert title="本博客主要技术栈：Vue + Egg.js + MongoDB" type="info" show-icon></el-alert>
    </div>
    <tSwiper style="margin:10px"></tSwiper>
    <el-card style="margin:10px">
      <comTitle title="热门文章" english="Top Article"></comTitle>
      <tArticle></tArticle>
    </el-card>
  </div>
</template>

<script>
import comTitle from "../../components/common/CommonTitle";
import tSwiper from "../../components/index/IndexSwiper";
import tArticle from "../../components/index/IndexArticle";
export default {
  name: "Index",
  components: { tSwiper, tArticle, comTitle }
};
</script>

<style lang="scss" scoped>
.el-alert {
  background: white;
}
</style>
