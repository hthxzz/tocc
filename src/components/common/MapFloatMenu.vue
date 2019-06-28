<template>
  <!-- 地图浮动菜单 -->
  <div class="map-float-menu-container">
    <div class="item" :key="item.id" v-for="item in mapItemList" @click="rederMap">
      <img src="item.picSrc" alt>
      <h2>{{ item.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      mapItemList: [
        {
          id: "afa1sfs",
          name: "班线客运",
          picSrc: "afafzzfw"
        },
        {
          id: "afa2sfs",
          name: "旅游包车",
          picSrc: "afafzzfw"
        },
        {
          id: "afas3fs",
          name: "危险品车",
          picSrc: "afafzzfw"
        },
        {
          id: "af4asfs",
          name: "重型货车",
          picSrc: "afafzzfw"
        },
        {
          id: "afa5sfs",
          name: "图层清除",
          picSrc: "afafzzfw"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.map-float-menu-container {
  width: 100%;
  height: 100%;
  display: flex;
  .item {
    width: 82px;
    height: 80px;
    margin-left: 10px;
    background: rgba(32, 86, 221, 1);
    text-align: center;
    border: $base-border;
    img {
      width: 50px;
      height: 32px;
    }
    h2 {
      height: 14px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>