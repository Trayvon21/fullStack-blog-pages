import Vue from "vue";
// import "highlight.js/styles/github-gist.css"; //引入代码高亮的css
import hljs from "highlight.js";

//封装成一个指令
Vue.directive("highlight", (el) => {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
