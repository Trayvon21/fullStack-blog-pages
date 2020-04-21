import api from "../../http/api";
import dayjs from "dayjs";
export default {
  namespaced: true,
  state: {
    timeline: []
  },
  mutations: {
    getTimeLine(state, data) {
      data.map(item => {
        item.start_time = dayjs(item.start_time).format("YYYY-MM-DD");
      });
      state.timeline = data;
    }
  },
  actions: {
    async getTimeLine({ commit }) {
      let res = await api.getTimeLine();
      if (res.code === 200) {
        commit("getTimeLine", res.data);
      }
    }
  }
};
