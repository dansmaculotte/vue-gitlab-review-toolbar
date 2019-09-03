import Vue from "vue";
import App from "./App.vue";
import GitlabReviewToolbar from "../../src/index.js";

Vue.use(GitlabReviewToolbar, {
  projectId: GITLAB_PROJECT_ID,
  projectPath: GITLAB_PROJECT_PATH,
  mergeRequestId: GITLAB_MERGE_REQUEST_ID,
  personalAccessToken: GITLAB_PERSONAL_ACCESS_TOKEN
});

new Vue({
  el: "#app",
  render: h => h(App)
});
