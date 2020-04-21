<template>
  <div>
    <el-card style="margin:10px">
      <el-timeline :reverse="true">
        <el-timeline-item
          v-for="item in timeline"
          :key="item._id"
          :timestamp="item.start_time"
          placement="top"
        >
          <el-card>
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const TimelineModel = createNamespacedHelpers("timeline");
const { mapState: timelineState, mapActions: timelineActions } = TimelineModel;
export default {
  name: "TimeLine",
  methods: {
    ...timelineActions(["getTimeLine"])
  },
  mounted() {
    this.getTimeLine();
  },
  computed: {
    ...timelineState(["timeline"])
  }
};
</script>

<style lang="scss" scoped>
.timeLine-container {
  background: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ededed;
  padding: 10px;
  margin: 10px;
}
</style>