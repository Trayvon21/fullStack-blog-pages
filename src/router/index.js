// import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/index/Index"),
        meta: {
          title: "长江丶的部落阁",
          type: "home",
        },
      },
    ],
  },
  {
    path: "/article",
    component: Home,
    children: [
      {
        path: "",
        name: "article",
        component: () => import("../views/article/Article"),
        meta: {
          title: "学习笔记",
          type: "article",
        },
      },
    ],
  },
  {
    path: "/articleDetail",
    component: Home,
    children: [
      {
        path: "",
        name: "articleDetail",
        component: () => import("../views/detail/ArticleDetail"),
        meta: {
          title: "学习笔记",
          type: "article",
        },
      },
    ],
  },
  {
    path: "/projects",
    component: Home,
    children: [
      {
        path: "",
        name: "projects",
        component: () => import("../views/project/Project"),
        meta: {
          title: "项目演示",
          type: "projects",
        },
      },
    ],
  },
  {
    path: "/timeLine",
    component: Home,
    children: [
      {
        path: "",
        name: "timeLine",
        component: () => import("../views/timeLine/TimeLine"),
        meta: {
          title: "项目历程",
          type: "timeLine",
        },
      },
    ],
  },
  {
    path: "*",
    name: 404,
    component: () => import("../views/404/404"),
  },
];
// const isPro = process.env.NODE_ENV === "production";
const router = new VueRouter({
  // mode: isPro ? "hash" : "history",
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
