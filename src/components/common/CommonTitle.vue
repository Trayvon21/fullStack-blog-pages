<template>
  <div class="title-box">
    <span class="title">{{title}}</span>
    <span class="english">{{english}}</span>
  </div>
</template>

<script>
export default {
  name: "ComTitle",
  props: {
    title: {
      type: String,
      required: true
    },
    english: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.title-box {
  padding-bottom: 5px;
  border-bottom: 1px solid #ededed;
  .title {
    font-size: 14px;
    font-weight: 600;
  }
  .english {
    font-size: 12px;
    margin-left: 10px;
    color: gray;
  }
}
</style>