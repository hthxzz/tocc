<template>
  <div id="app">
    <div id="nav">
      <div class="bj"></div>
      <div class="time">
        <h2>2019年6月12日 12：23：05</h2>
      </div>
      <div class="menu left" @click="selectSubSys">
        <div class="index left-actived" ref="index">系统首页</div>
        <div class="jcyj" ref="jcyj">监测预警</div>
        <div class="ztjc" ref="ztjc">专题检测</div>
      </div>
      <div class="logo"></div>
      <div class="menu right" @click="selectSubSys">
        <div class="yjxt" ref="yjxt">应急协同</div>
        <div class="xxfb" ref="xxfb">信息发布</div>
        <div class="fzjc" ref="fzjc">辅助决策</div>
      </div>
      <div class="user">
        <div class="icon">

        </div>
        <h2>你好Administrater</h2>
        <div class="logout">

        </div>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
    
  </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
          selectSubSys(event){
            var  refs = this.$refs,
            leftmenu = ["index","jcyj","ztjc"],
            rightmenu = ["yjxt","xxfb","fzjc"],
            selectEleClass = event.srcElement.classList[0],
            //选中的元素是否是菜单
            lflag = leftmenu.indexOf(selectEleClass) != -1,
            rflag = rightmenu.indexOf(selectEleClass) != -1;
            leftmenu.forEach(function(item,inex){
              refs[item].classList.remove("left-actived");
            });

            rightmenu.forEach(function(item,inex){
              refs[item].classList.remove("right-actived");
            });            
            // refs.index.classList.remove("left-actived");
            // refs.jcyj.classList.remo
            // ve("left-actived");
            // refs.ztjc.classList.remove("left-actived");

            // refs.yjxt.classList.remove("right-actived");
            // refs.xxfb.classList.remove("right-actived");
            // refs.ztjc.classList.remove("right-actived");
            if (lflag) {
               event.srcElement.classList.add("left-actived");
            }
            if (rflag) {
               event.srcElement.classList.add("right-actived");
            }   
            this.$router.push(selectEleClass);       
           
            
            
          }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin center {
      justify-content: center;
      align-items: center;
    }
    #nav{
      display: flex;
      // height: 1.1rem /* 110/100 */;
      background: url('./assets/head_bg.png') no-repeat;
      background-size: 100% 100%;
      .title{
        position: absolute;
        width: 100%;
        height: 1.04rem;
        
      }
      .time{
        flex: 241;
        width:2.05rem; /* 205/100 */
        height:0.12rem; /* 12/100 */

        h2{
          font-size:.14rem /* 14/100 */;
          font-family:MicrosoftYaHei-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:30px;
          margin-top: .26rem /* 26/100 */;
        }
      }
      .menu{
        display: flex;
        width: 360px;
        flex: 400;
        // @include center;
        >div{
          width:1.11rem /* 111/100 */;
          height:.36rem /* 36/100 */;
          margin-top: .26rem /* 26/100 */;
          font-size:.18rem /* 18/100 */;
          font-family:MicrosoftYaHei-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:.36rem;

          cursor: pointer;
        }
        >div:nth-child(1){
          margin-left: .3rem /* 20/100 */;
        }
        >div:nth-child(2){
          margin-left: .2rem /* 20/100 */;
        }
        >div:nth-child(3){
          margin-left: .1rem /* 20/100 */;
        }
      }
      .left{
        flex: 425;
      }
      .left > div{
          background: url('./assets/left_nav.png') no-repeat;
          background-size: 100% 100%;
      }
      .right{
        flex: 425;
      }
      .right> div{
          background: url('./assets/right_nav.png') no-repeat;
          background-size: 100% 100%;
      }
      .logo{
        flex: 616;
        background: url('./assets/logo.png') no-repeat;
        background-size: 100% 100%;
      }
      .user{
        flex: 263;
        display: flex;
        .icon{
          flex: 1
        }
        h2{
          flex: 1;
          width:127px;
          height:12px;
          font-size:12px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:30px;
        }
        .logout{
          flex: 1
        }
      }
    }
</style>

<style>
*{
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: url('./assets/all_bg.png') no-repeat;
  background-size: 100% 100%;
}
#nav{
  flex: 110;
}









.left-actived{
  background: url('./assets/left_nav_h.png')  no-repeat !important;
  background-size: 100% 100%!important;
}
.right-actived{
  background: url('./assets/right_nav_h.png')  no-repeat !important;
  background-size: 100% 100%!important;
}
.content{
  flex: 970;
}
</style>
