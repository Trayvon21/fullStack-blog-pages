<template>
  <div class="article-container">
    <div class="art-title" @click="gotoDetail(data._id)">{{data.title}}</div>
    <div class="art-info flex flex-wrap">
      <div>发布时间：{{ data.create_time | dateFormat }}</div>
      <div>类型：{{ art_type.type_name }}</div>
      <div>阅读：{{data.view_count}}人次</div>
      <div>评论：{{data.commit_num}}条</div>
    </div>
    <div class="txt-hidden-3 art-desc txt-justify">
      <span>摘要:</span>
      {{data.desc}}
    </div>
    <div class="read-more flex a-center" @click="gotoDetail(data._id)">
      <div>查看全部</div>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexArticle",
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    types: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({ path: "/articleDetail", query: { id } });
    }
  },
  computed: {
    art_type() {
      return this.types.filter(item => item.type_id === this.data.type_id)[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.article-container {
  margin-bottom: 30px;
  padding: 10px 0 30px 0;
  background: white;
  border-bottom: 2px solid #ededed;
  border-radius: 3px;
  position: relative;
}
.art-title {
  cursor: pointer;
  font-size: 24px;
  line-height: 30px;
  color: #3086c0;
}
.art-info {
  color: gray;
  font-size: 12px;
  padding: 8px 0;
  > div {
    margin-right: 10px;
    white-space: nowrap;
  }
}
.art-desc {
  font-size: 14px;
  line-height: 22px;
  max-height: 66px;
}
.read-more {
  position: absolute;
  font-size: 14px;
  cursor: pointer;
  right: 5px;
  bottom: 5px;
  color: #1890ff;
}
</style>