<template>
  <div class="flex commit-container">
    <div>
      <img class="commit-pic" :src="item.avatar" alt />
    </div>
    <div>
      <div class="flex a-center">
        <div class="commit-nickname">{{item.nickname}}</div>
        <div class="commit-up">{{index+1}}楼 - {{item.createdAt | beforeFormat}}</div>
      </div>
      <div class="commit-content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EachCommit",
  props: {
    index: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.commit-container {
  padding: 10px;
  border-bottom: 1px solid #ededed;
}
.commit-pic {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ededed;
}
.commit-nickname {
  font-size: 14px;
}
.commit-up {
  font-size: 12px;
  margin-left: 5px;
  color: #08c;
}
.commit-content {
  font-size: 14px;
  line-height: 1.5;
}
</style>