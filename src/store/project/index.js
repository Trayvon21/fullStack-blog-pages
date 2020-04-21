import api from "../../http/api";

export default {
  namespaced: true,
  state: {
    pages: {
      page: 1,
      size: 30,
      total: 0,
    },
    pro_type: null,
    projectList: null,
  },
  mutations: {
    getProjectList(state, data) {
      state.pages = data.pages;
      state.projectList = data.result;
    },
    getProjectType(state, data) {
      data.unshift({
        desc: "全部",
        type_id: "all",
        type_name: "全部",
      });
      state.pro_type = data;
    },
  },
  actions: {
    async getProjectList({ commit, state }, params) {
      let res = await api.getProjects(params, state.pages);
      if (res.code === 200) {
        commit("getProjectList", res.data);
      }
    },
    async getProjectType({ commit }) {
      let res = await api.getProjectType();
      if (res.code === 200) {
        commit("getProjectType", res.data);
      }
    },
  },
};
