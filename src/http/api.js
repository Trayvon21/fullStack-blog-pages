import service from "./index";

export default {
  getArticles(type, pages) {
    return service.get(
      `/article/${type}?page=${pages.page}&size=${pages.size}`
    );
  },
  getArtDetail(id) {
    return service.get(`/art_detail/${id}`);
  },
  editArtDetail({ id, content }) {
    return service.put(`/art_detail/${id}`, { content });
  },
  getArticleType() {
    return service.get("/art_type");
  },
  getHotArt() {
    return service.get("/art_hots");
  },
  getArtCharts() {
    return service.get("/art_charts");
  },
  getProjects(type, pages) {
    return service.get(
      `/project/${type}?page=${pages.page}&size=${pages.size}`
    );
  },
  getProjectType() {
    return service.get("/project_type");
  },
  getCommit(art_id) {
    return service.get(`/commit/${art_id}`);
  },
  putCommit({ id, nickname, content, email }) {
    return service.put(`/commit/${id}`, { nickname, content, email });
  },
  getTimeLine() {
    return service.get("/timeline");
  },
  getWebInfo() {
    return service.get("/webinfo");
  },
};
