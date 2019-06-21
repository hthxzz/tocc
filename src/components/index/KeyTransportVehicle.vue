<template>
  <div class="container">
    <div class="left item"></div>
    <div class="right item">
        <div class="wrap" :key="res.number" v-for="res in KeyTransportVehicleInfo">
            <div class="content">
                <span class="aaa" :style="{backgroundColor:res.color}"></span>
                <span class="aaa">{{ res.number }}</span>
                <span class="aaa">辆</span>
            </div>
            <h2>{{ res.name }}</h2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      KeyTransportVehicleInfo: [
        { color: "rgba(32, 86, 221, 1)", name: "班线客运车辆", number: "1023" },
        { color: "rgba(255, 255, 0, 1)", name: "旅游包车", number: "4531" },
        { color: "rgba(0, 176, 80, 1)", name: "危险品货运车辆", number: "6435" },
        { color: "rgba(114, 246, 250, 1)", name: "12吨以上重型货运车辆", number: "2356" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: left;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(32,86,221,1);
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    .wrap{
        flex: 1;
        .content{
            color: rgba(255, 255, 255, 1);
            span:nth-child(1){
                display: inline-block;
                width:8px;
                height:8px;
                border-radius:50%;
            }
            span:nth-child(2){
                margin-left: 12PX;
                font-size: 16px;
                display: inline-block;
                height: 18px;
            }
            span:nth-child(3){
                margin-left: 30PX;
            }
        }
        h2{
            font-size:14px;
            margin-left: 20px;
        }
    }
  }
}
</style>