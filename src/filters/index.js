import Vue from "vue";
//引入dayjs
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

Vue.filter("timeFormat", function timeFormat(val) {
  return dayjs(val).format("YYYY-MM-DD");
});

Vue.filter("dateFormat", function dateFormat(val) {
  return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
});

Vue.filter("beforeFormat", function dateFormat(val) {
  var mistiming = (new Date() - new Date(val)) / 1000;
  var arrr = ["年", "个月", "星期", "天", "小时", "分钟", "秒"];
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
  for (var i = 0; i <= 6; i++) {
    var inm = Math.floor(mistiming / arrn[i]);
    if (inm != 0) {
      return inm + arrr[i] + "前";
    } else if (i === 6) {
      return "就在刚刚";
    }
  }
});
