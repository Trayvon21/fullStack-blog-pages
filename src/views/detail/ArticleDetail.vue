<template>
  <div>
    <el-card style="margin:10px">
      <div class="article-box" v-if="artDetail">
        <div>
          <div class="flex jc-between art-info a-center" style="white-space:nowrap">
            <div>
              <el-page-header @back="goBack"></el-page-header>
            </div>
            <div class="top-info flex a-center">
              <div class="move" @click="gotoHome">首页</div>
              <div class="cut">/</div>
              <div class="move" @click="gotoArticles">{{artDetail.art_type.type_name}}</div>
              <div class="cut">/</div>
              <div>{{artDetail.title}}</div>
            </div>
          </div>
          <div class="txt-center" style="width:100%">
            <div class="art-title">{{artDetail.title}}</div>
            <div class="flex a-center jc-between art-intro">
              <div>作者：{{artDetail.author}}</div>
              <div>发布时间：{{artDetail.create_time | timeFormat}}</div>
            </div>
          </div>
          <div class="content" v-highlight v-html="artDetail.content"></div>
        </div>
        <!-- <mavon-editor ref="editor" v-model="value" @save="save" /> -->
        <edit-commit :id="artDetail._id"></edit-commit>
        <comTitle title="留言板" english="Message"></comTitle>
        <div v-if="artDetail.commits.length>0">
          <each-commit
            v-for="(item,index) in artDetail.commits"
            :key="item._id"
            :item="item"
            :index="index"
          ></each-commit>
        </div>
        <div v-else class="flex a-center jc-center">
          <div style="margin-top:20px;font-size:14px;color:gray">暂无留言</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import editCommit from "../../components/detail/EditCommit";
import eachCommit from "../../components/detail/EachCommit";
import comTitle from "../../components/common/CommonTitle";
import { createNamespacedHelpers } from "vuex";
import marked from "marked";
const articleModel = createNamespacedHelpers("article");
const { mapActions: articleActions, mapState: articleState } = articleModel;

export default {
  name: "ArticleDetail",
  components: {
    editCommit,
    eachCommit,
    comTitle
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    ...articleActions(["getArtDetail", "editArtDetail"]),
    save() {
      let content = marked(this.value);
      this.editArtDetail({ id: this.artDetail._id, content });
    },
    goBack() {
      this.$router.go(-1);
    },
    gotoHome() {
      this.$router.push("/");
    },
    gotoArticles() {
      this.$router.push({
        path: "article",
        query: { id: this.art_type.type_id }
      });
    }
  },
  mounted() {
    this.getArtDetail(this.$route.query.id).then(() => {
      this.value = this.artDetail.content;
    });
  },
  computed: {
    ...articleState(["artDetail"])
  }
};
</script>

<style lang="scss" scoped>
.article-box {
  background: white;
  border-radius: 3px;
  overflow: hidden;
}
.art-info {
  color: gray;
  font-size: 14px;
  line-height: 16px;
  background: #eeeeee;
  padding: 5px;
}
.top-info {
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .cut {
    margin: 0 8px;
  }
  .move {
    color: #08c;
    cursor: pointer;
  }
}
.content {
  margin: 15px 0;
  line-height: 1.5;
}

.art-title {
  font-size: 30px;
  margin: 10px;
}
.art-intro {
  max-width: 375px;
  margin: 0 auto;
  font-size: 14px;
  color: gray;
}
</style>