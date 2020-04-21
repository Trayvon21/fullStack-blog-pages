import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
import ELEMENT from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
Vue.use(ELEMENT);
import MavonEditor from "mavon-editor";
Vue.use(MavonEditor);

import "./filters";
import "./utils";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
