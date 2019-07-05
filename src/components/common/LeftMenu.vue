<template>
  <div class="left-menu-containe">
    <div class="left-menu-wrap">
      <div class="item" :key="item.id" v-for="item in leftMenuList" @click="goto">
        <img :src="item.picSrc" alt>
        <div class="tip">{{ item.tip }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      leftMenuList: [
        {
          id:"afaesgesgserg",
          picSrc: require("../../image/monitoringAndEarlyWarning/roadNetworkRunMonitor/ydyj.png"),
          tip: "车辆信息"
        },
        {
            id:"afaes53212gesgserg",
          picSrc: require("../../image/monitoringAndEarlyWarning/roadNetworkRunMonitor/tqyj.png"),
          tip: "天气预警"
        },
        {
          id:"afaesfwd23gesgserg",
          picSrc: require("../../image/monitoringAndEarlyWarning/roadNetworkRunMonitor/tjfx.png"),
          tip: "主页信息"
        }
      ]
    };
  },
  methods: {
    goto(){
      this.$router.push({name:'b'});
    }
  }
};
</script>

<style lang="scss" scoped>
.left-menu-containe {
  width: 100%;
  height: 100%;
  .left-menu-wrap {
    display: flex;
    flex-direction: column; 
    
    .item{
        margin-bottom: 21px;
        position: relative;
        cursor: pointer;
        &:hover{
          background:rgba(32,86,221,.4);
        }
        &:hover > .tip{
            display: block;
        }
    }
    .tip{
        position: absolute;
        color: #FFFFFF;
        left: 60px;
        // width: 81px;
        top: 11px;
        display: none;
        text-align: center;
        width:80px;
        height:24px;
        background:rgba(32,86,221,1);
        border-radius:2px;
        font-size: 14px;
        line-height: 24px;
    }
  }
}
</style>