<template>
  <div class="content-center flex jc-center a-center">
    <div class="txt-center f-info">
      <div>
        Copyright © 2020
        <a href="https://github.com/Trayvon21" target="_blank">trayvon21.com</a>
        . All rights reserved.
      </div>
      <div class="flex a-center jc-around f-beian">
        <div>
          <a href="http://www.beian.miit.gov.cn" target="_blank">蜀ICP备19041539号</a>
        </div>
        <div>Powered by Trayvon21.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.f-info {
  font-size: 12px;
  > div {
    margin: 10px;
  }
}
.f-beian {
  > div {
    padding: 0 20px;
  }
  > :nth-child(1) {
    border-right: 1px solid gray;
  }
}
a {
  color: gray !important;
}
</style>
