<template>
  <el-col class="commit-container">
    <comTitle title="我要留言" english="Leave a message"></comTitle>
    <el-input
      class="commit-txt"
      type="textarea"
      :rows="2"
      placeholder="请输入您想对我说的话。"
      v-model="msgForm.content"
    ></el-input>
    <el-row :gutter="10">
      <el-col :span="12" :xs="24">
        <div>
          <el-input placeholder="请输入您的昵称（必填）" v-model="msgForm.nickname">
            <template slot="prepend">昵称</template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <div>
          <el-input placeholder="请输入您的邮箱（必填，不公开）" v-model="msgForm.email">
            <template slot="prepend">邮箱</template>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-button type="primary" class="commit-btn" @click="submit">提交</el-button>
    <div class="commit-msg">(留言将在审核过后显示在页面上)</div>
  </el-col>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const articleModel = createNamespacedHelpers("article");
const { mapActions: articleActions } = articleModel;
import comTitle from "../../components/common/CommonTitle";
export default {
  name: "DetialCommit",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  components: {
    comTitle
  },
  data() {
    return {
      msgForm: {
        nickname: "",
        email: "",
        content: ""
      }
    };
  },
  methods: {
    ...articleActions(["putCommit"]),
    submit() {
      for (let i in this.msgForm) {
        if (this.msgForm[i] === "") {
          const msg =
            i === "nickname" ? "昵称" : i === "email" ? "邮箱" : "留言";
          this.$message.error(`${msg}不能为空`);
          return;
        }
      }
      const reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      );
      if (!reg.test(this.msgForm.email)) {
        this.$message.error("邮箱格式错误");
        return;
      }
      this.msgForm.id = this.id;
      this.putCommit(this.msgForm);
      for (let i in this.msgForm) {
        if (i !== "id") {
          this.msgForm[i] = "";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.commit-container {
  padding-top: 20px;
}
.el-row {
  margin-top: 10px;
}
.el-col {
  margin-bottom: 10px;
}
.commit-txt {
  margin-top: 10px;
}
.commit-btn {
  width: 100%;
  height: 30px;
  font-size: 16px;
  line-height: 16px;
  padding: 0;
  margin-top: 10px;
}
.commit-msg {
  font-size: 12px;
  text-align: center;
  color: gray;
  margin: 10px;
}
</style>