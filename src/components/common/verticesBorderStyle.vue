<template>
  <!-- 边款的4个顶点样式,用css实现，需要上一级元素自动或者相对定位 -->
  <div class="verticesBorderStyle">
    <span class="left-top-border-row"></span>
    <span class="left-top-border-col"></span>
    <span class="left-bot-border-row"></span>
    <span class="left-bot-border-col"></span>
    <span class="right-top-border-row"></span>
    <span class="right-bot-border-row"></span>
    <span class="right-top-border-col"></span>
    <span class="right-bot-border-col"></span>
  </div>
</template>

<script>
export default {
  name: "",
  // functional:true,
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@mixin row {
  width: 16px;
  height: 1px;
}
@mixin col {
  width: 1px;
  height: 16px;
}
span {
  position: absolute;
  background-color: rgba(32, 86, 221, 1);
}
.left-top-border-row {
  @include row;
  left: 0;
  top: -1px;
}
.left-top-border-col {
  @include col;
  left: 0;
  top: -1px;
}
.left-bot-border-row {
  @include row;
  left: 0;
  bottom: -1px;
}
.left-bot-border-col {
  @include col;
  left: 0;
  bottom: 0;
}
.right-top-border-row {
  @include row;
  right: 0;
  top: -1px;
}
.right-top-border-col {
  @include col;
  right: 0;
  top: 0;
}
.right-bot-border-col {
  @include col;
  right: 0;
  bottom: 0;
}
.right-bot-border-row {
  @include row;
  right: 0;
  bottom: 0;
}
</style>