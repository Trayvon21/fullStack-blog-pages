<template>
  <div>
    <el-card style="margin:10px">
      <el-tabs v-model="active" @tab-click="tabClick">
        <el-tab-pane
          v-for="item in art_types"
          :key="item.type_id"
          :label="item.type_name"
          :name="item.type_id"
        ></el-tab-pane>
      </el-tabs>
      <tArticle v-for="item in articleList" :data="item" :key="item.id" :types="art_types"></tArticle>
      <el-pagination
        @size-change="sizeChange"
        @current-change="pageChange"
        :current-page="pages.page"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="pages.size"
        layout="total, sizes, prev, pager, next"
        :total="pages.total"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import tArticle from "../../components/common/ArticleBox";
import { createNamespacedHelpers } from "vuex";
const ArticleModel = createNamespacedHelpers("article");
const { mapState: articleState, mapActions: articleActions } = ArticleModel;
export default {
  components: {
    tArticle
  },
  data() {
    return {
      active: "all"
    };
  },
  methods: {
    ...articleActions(["getArticle", "getArticleType", "changePage"]),
    pageChange(page) {
      this.changePage({ page, type: this.active });
    },
    sizeChange(size) {
      this.changePage({ size, page: 1, type: this.active });
    },
    tabClick() {
      if (this.$route.query.id !== this.active) {
        this.$router.push({ path: "/article", query: { id: this.active } });
        this.changePage({ page: 1, type: this.active });
      }
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.active = this.$route.query.id;
    }
    this.getArticle(this.active);
    this.getArticleType();
  },
  computed: {
    ...articleState(["articleList", "art_types", "pages", "active_type"])
  }
};
</script>

<style lang="scss" scoped>
.el-tabs {
  background: white;
  padding: 0 2px;
}
.el-pagination {
  margin: 2px;
}
</style>