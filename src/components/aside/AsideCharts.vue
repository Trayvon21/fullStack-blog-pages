<template>
  <div>
    <el-card class="margin:10px;">
      <comTitle title="数据统计" english="Data statistics"></comTitle>
      <div id="main"></div>
    </el-card>
  </div>
</template>

<script>
import comTitle from "../../components/common/CommonTitle";
import echarts from "e-charts";
export default {
  name: "AsideCharts",
  components: {
    comTitle
  },
  methods: {
    set() {
      var myChart = echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["原创", "转载", "未分类"]
        },
        series: [
          {
            name: "文章统计",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 3, name: "原创" },
              { value: 1, name: "转载" },
              { value: 4, name: "未分类" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.set();
  }
};
</script>

<style lang="scss" scoped>
#main {
  height: 200px;
}
</style>