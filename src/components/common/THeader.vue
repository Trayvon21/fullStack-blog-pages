<template>
  <div class="content-center header-container">
    <el-row :gutter="24" justify="space-between" align="center">
      <el-col :lg="15" :md="13" :xs="24">
        <div class="flex a-center">
          <div class="h-logo">
            <img src="../../assets/imgs/logo.jpg" alt />
          </div>
          <div class="h-name">Trayvon21</div>
          <div class="h-desc">一个正在学习前端的编程新手</div>
        </div>
      </el-col>
      <el-col :lg="9" :md="11" :xs="24" class="txt-right">
        <div class="flex h-nav a-center">
          <div
            :class="active === item.path ? 'active' : ''"
            v-for="item in navList"
            :key="item.path"
            @click="gotoPath(item.path)"
          >
            <div>{{ item.title }}</div>
            <span></span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "THeader",
  data() {
    return {
      navList: [
        {
          title: "我的首页",
          path: "home"
        },
        {
          title: "学习笔记",
          path: "article"
        },
        {
          title: "项目演示",
          path: "projects"
        },
        {
          title: "博客历程",
          path: "timeLine"
        },
        {
          title: "用户登录",
          path: "admin"
        }
      ]
    };
  },
  methods: {
    gotoPath(data) {
      if (data === "admin") {
        window.open("/admin");
        return;
      }
      let path = `/${data}`;
      if (path !== this.$route.path) {
        this.$router.push(path);
      }
    }
  },
  computed: {
    active() {
      return this.$route.meta.type;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  background: white;
  min-height: 60px;
}
.h-logo {
  width: 50px;
  height: 50px;
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
  }
  //   background: red;
}
.h-name {
  margin: 10px;
  font-size: 22px;
  color: skyblue;
}
.h-desc {
  font-size: 12px;
  color: gray;
}

// 导航栏样式
.h-nav {
  min-height: 60px;
  margin: 0 10px;
  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  > div {
    white-space: nowrap;
    margin: 10px;
    color: gray;
    cursor: pointer;
    position: relative;
    span {
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 3px;
      background: #3086c0;
      transition: width 0.6s;
    }
  }
  > div:hover,
  .active {
    color: #3086c0;
    span {
      width: 100%;
    }
  }
}
</style>
