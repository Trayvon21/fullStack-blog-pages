<template>
  <div>
    <el-card style="margin:10px">
      <el-tabs v-model="active" type="card" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in pro_type"
          :key="item.type_id"
          :label="item.type_name"
          :name="item.type_id"
        ></el-tab-pane>
      </el-tabs>
      <el-col :gutter="10">
        <el-col
          :span="8"
          :lg="8"
          :md="8"
          :sm="12"
          :xs="24"
          v-for="item in projectList"
          :key="item._id"
          class="col-bottom"
        >
          <div>
            <project-box :item="item"></project-box>
          </div>
        </el-col>
      </el-col>
    </el-card>
  </div>
</template>

<script>
import projectBox from "../../components/project/ProjectBox";
import { createNamespacedHelpers } from "vuex";
const projectModel = createNamespacedHelpers("project");
const { mapActions: projectActions, mapState: projectState } = projectModel;
export default {
  name: "Project",
  components: {
    projectBox
  },
  data() {
    return { active: "all" };
  },
  methods: {
    ...projectActions(["getProjectType", "getProjectList"]),
    handleClick() {
      this.getProjectList(this.active);
    }
  },
  mounted() {
    this.getProjectType();
    this.getProjectList("all");
  },
  computed: {
    ...projectState(["pro_type", "projectList"])
  }
};
</script>

<style lang="scss" scoped>
.project-container {
  margin: 5px;
}
.col-bottom {
  margin-bottom: 20px;
  height: 200px;
}
</style>