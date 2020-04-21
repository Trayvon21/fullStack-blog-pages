import api from "../../http/api";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    articleList: [],
    art_types: [],
    pages: {
      total: 0,
      page: 1,
      size: 5,
    },
    artDetail: null,
  },
  mutations: {
    getArticle(state, data) {
      state.articleList = data.result;
      state.pages = data.pages;
    },
    getArticleType(state, data) {
      data.unshift({
        type_id: "all",
        type_name: "全部",
        desc: "全部数据",
      });
      state.art_types = data;
    },
    getArtDetail(state, data) {
      state.artDetail = data;
    },
  },
  actions: {
    async getArticle({ commit, state }, type) {
      const res = await api.getArticles(type, state.pages);
      if (res.code === 200) {
        commit("getArticle", res.data);
      }
    },
    async getArtDetail({ commit, state }, id) {
      state.artDetail = null;
      const res = await api.getArtDetail(id);
      if (res.code === 200) {
        commit("getArtDetail", res.data);
      }
    },
    async editArtDetail({ dispatch }, params) {
      const res = await api.editArtDetail(params);
      if (res.code === 200) {
        dispatch("getArtDetail", params.id);
      }
    },
    async getArticleType({ commit }) {
      const res = await api.getArticleType();
      if (res.code === 200) {
        commit("getArticleType", res.data);
      }
    },
    async changePage({ dispatch, state }, params) {
      state.pages.page = params.page;
      if (params.size) {
        state.pages.size = params.size;
      }
      dispatch("getArticle", params.type);
    },
    async putCommit({ dispatch }, params) {
      let res = await api.putCommit(params);
      if (res.code === 200) {
        Message.success(res.msg);
        dispatch("getCommit", res.data.art_id);
      }
    },
  },
};
