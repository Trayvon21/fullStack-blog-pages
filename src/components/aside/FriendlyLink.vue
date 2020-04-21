<template>
  <div>
    <el-card>
      <comTitle title="友情链接" english="Friend Links"></comTitle>
      <div class="flex flex-wrap">
        <div class="link-desc" v-for="item in 5" :key="item">友情链接{{item}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
import comTitle from "../common/CommonTitle";
export default {
  name: "FriendlyLink",
  components: {
    comTitle
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  margin: 10px 0;
  .link-desc {
    font-size: 14px;
    white-space: nowrap;
    margin: 5px;
  }
}
</style>