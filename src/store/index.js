// import Vue from "vue";
import Vuex from "vuex";
import article from "./article";
import timeline from "./timeline";
import project from "./project";
import api from "../http/api";

// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    webinfo: null,
    hot_arts: null,
    art_charts: [],
  },
  mutations: {
    getWebInfo(state, data) {
      state.webinfo = data;
    },
    getHotArt(state, data) {
      state.hot_arts = data;
    },
    getArtCharts(state, data) {
      state.art_charts = data;
    },
  },
  actions: {
    async getWebInfo({ commit }) {
      let res = await api.getWebInfo();
      if (res.code === 200) {
        commit("getWebInfo", res.data);
      }
    },
    async getHotArt({ commit }) {
      let res = await api.getHotArt();
      if (res.code === 200) {
        commit("getHotArt", res.data);
      }
    },
    async getArtCharts({ commit }) {
      let res = await api.getArtCharts();
      if (res.code === 200) {
        commit("getArtCharts", res.data);
      }
    },
  },
  modules: { article, timeline, project },
});
