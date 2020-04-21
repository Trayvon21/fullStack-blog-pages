<template>
  <div class="project-coantainer">
    <el-card>
      <div class="project-pic" @click="gotoShow(item.url)">
        <img src alt />
      </div>
      <div class="project-info">
        <div style="padding:10px" class="flex jc-between a-center">
          <div>
            <div style="font-size:18px;">{{item.name}}</div>
            <div style="font-size:14px;color:gray">{{item.desc}}</div>
          </div>
          <div class="read-code" style="font-size:15px" @click.stop="readCode(item.codePath)">源码</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ProjectBox",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    gotoShow(url) {
      if (url !== "") {
        window.open(url);
      } else {
        this.$message.error("本项目无演示地址");
      }
    },
    readCode(path) {
      window.open(path, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.project-coantainer {
  position: relative;
}
.project-info {
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
  border-radius: 0 0 10px 10px;
  font-size: 18px;
  .read-code {
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: green;
    }
  }
}
.el-card {
  border-radius: 10px;
  overflow: hidden;
}
/deep/ .el-card__body {
  padding: 0 !important;
  margin: 0;
}
.project-pic {
  width: 100%;
  height: 200px;
  background: green;
  cursor: pointer;
}
</style>