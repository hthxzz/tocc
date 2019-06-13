<template>
  <div id="app">
    <div id="nav">
      <div class="title"></div>
      <div class="time">2019年6月12日 12：23：05</div>
      <div class="menu left">
        <div>系统首页</div>
        <div>监测预警</div>
        <div>专题检测</div>
      </div>
      <div class="logo"></div>
      <div class="menu right">
        <div>应急协同</div>
        <div>信息发布</div>
        <div>辅助决策</div>
      </div>
      <div class="user"></div>
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0
}
.menu{
    display: flex;
  width: 360px;
   flex: 360;
}
.menu >div{

  width:111px;
  height:36px;
 
  font-size:18px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:30px;
}
.user{
  flex: 211;
}
.time{
  flex: 211;
  width:205px;
height:12px;
font-size:14px;
font-family:MicrosoftYaHei-Bold;
font-weight:bold;
color:rgba(255,255,255,1);
line-height:30px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background: url('./assets/all_bg.png') no-repeat center center
}
#nav{
  display: flex;
  height: 104px;
  background: url('./assets/head_bg.png') no-repeat center center
}
.logo{
  flex: 616;
}
.title{
  position: absolute;
  
  width: 100%;
  height: 104px;
  background: url('./assets/logo.png') no-repeat center center
}
</style>
