
<template>
  <div id="app">
    <div id="nav">
      <div class="bj"></div>
      <div class="time">
        <h2>{{time}}</h2>
      </div>
      <div class="menu left" @click="selectSubSys" @mouseover="showMenu" @mouseleave="hideMenu">
        <router-link to="/index">
           <div class="index left-actived" ref="index">系统首页</div>
        </router-link>
       
        <div class="jcyj" ref="jcyj">监测预警</div>
        <div class="ztjc" ref="ztjc">专题检测</div>
      </div>
      <div class="logo">
        <img src="./assets/logo.png" alt="" srcset="">
        <h2>{{ currentActiveMenuTitle }}</h2>
      </div>
      <div class="menu right" @click="selectSubSys" @mouseover="showMenu" @mouseleave="hideMenu">
        <div class="yjxt" ref="yjxt">应急协同</div>
        <div class="xxfb" ref="xxfb">信息发布</div>
        <div class="fzjc" ref="fzjc">辅助决策</div>
      </div>
      <div class="user">
        <div class="icon">
          <img src="./assets/user.png" alt="" >
        </div>
        <h2>你好Administrater</h2>
        <div class="logout">

        </div>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <!-- <div class="modal"> -->
      <sub-menu :show="show" :sysName="sysName" :positin="positin"></sub-menu>
    <!-- </div> -->
    
  </div>
</template>
<script>
import subMenu from "./components/index/subMenu.vue";
import { mapMutations } from 'vuex'
    export default {
        name: '',
        components: {
          subMenu
        },
        data() {
            return {
              time: '',
              sysName: '',
              elementNav: '',
              elementHover: '',
              positin:[0,0]
                // show:this.$store.state.menushow

            }
        },
        mounted () {
          this.$store.state.app.currentActiveMenuEle = this.$refs.index;
          this.$store.state.app.preActiveMenuEle = this.$refs.index;
          this.elementNav = document.querySelector("#nav").getBoundingClientRect();
          console.log(process.env);
          
          setInterval(() => {
          var date = new Date(),
              year = date.getFullYear(),
              month = date.getMonth() + 1,
              day = date.getDate(),
              hour = this.formateDate(date.getHours()),
              minutes = this.formateDate(date.getMinutes()),
              seconds = this.formateDate(date.getSeconds()),
              time = year + "年" + month + "月" + day + "日" + " " + hour + ":" + minutes + ":" + seconds;
              this.time = time;
          }, 1000);
        },
        computed: {
          show:function(){
            return this.$store.state.app.menushow
          },
          //当前激活菜单标题
          currentActiveMenuTitle:function(){
            return this.$store.state.app.currentActiveMenuTitle
          }
        },
        methods: {
          formateDate(d){
            return d < 10 ? "0" + d : d;
          },
          showMenu(event){
            let selectEleClass = event.srcElement.classList[0];
            if (this.contentOfLeftMenu(selectEleClass)) {
                this.elementHover = event.srcElement.getBoundingClientRect();
                this.$store.state.app.menushow = true;
                this.$store.state.app.hoverMenuEle = selectEleClass;
                this.positin[0] = this.elementHover.x + this.elementHover.width/2;
                this.positin[1] = this.elementNav.height - 10;

                this.$store.state.app.currentActiveMenuEle = event.srcElement;
            }
            if (this.contentOfRightMenu(selectEleClass)) {
                this.elementHover = event.srcElement.getBoundingClientRect();
                this.$store.state.app.menushow = true;
                this.$store.state.app.hoverMenuEle = selectEleClass;
            }
          },
          hideMenu(){
            this.$store.commit('app/switchMenuShow',false)
          },
          contentOfLeftMenu(selectEleClass){
              const   leftmenu = ["jcyj","ztjc"];
              return  leftmenu.indexOf(selectEleClass) != -1 ? true:false;
          },
          contentOfRightMenu(selectEleClass){
              const   rightmenu = ["yjxt","xxfb","fzjc"];
              return  rightmenu.indexOf(selectEleClass) != -1 ? true:false;
          },          
          selectSubSys(event){
            var  refs = this.$refs,
            
            selectEleClass = event.srcElement.classList[0],
            //选中的元素是否是菜单
            lflag = contentOfLeftMenu(selectEleClass),
            rflag = contentOfRightMenu(selectEleClass) != -1;
         
            // refs.index.classList.remove("left-actived");
            // refs.jcyj.classList.remo
            // ve("left-actived");
            // refs.ztjc.classList.remove("left-actived");

            // refs.yjxt.classList.remove("right-actived");
            // refs.xxfb.classList.remove("right-actived");
            // refs.ztjc.classList.remove("right-actived");
            if (lflag) {
                leftmenu.forEach(function(item,inex){
                  refs[item].classList.remove("left-actived");
                });    
               event.srcElement.classList.add("left-actived");
               this.$router.push(selectEleClass);  
           
            }
            if (rflag) {
              rightmenu.forEach(function(item,inex){
                refs[item].classList.remove("right-actived");
              });   
               event.srcElement.classList.add("right-actived");
               this.$router.push(selectEleClass);  
 
            }   
                 
           
            
            
          }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin center {
      justify-content: center;
      align-items: center;
    }
    .content{
      flex: 970;
      margin-bottom: 10px;
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
        @include center;
        display: flex;

        // width:2.05rem; /* 205/100 */
        // height:0.12rem; /* 12/100 */

        h2{
          font-size:.14rem /* 14/100 */;
          font-family:MicrosoftYaHei-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:30px;
          // margin-top: .26rem /* 26/100 */;
        }
      }
      .menu{
        display: flex;
        width: 360px;
        flex: 400;
         @include center;
        >div, a > div{
          width:1.11rem /* 111/100 */;
          height:.36rem /* 36/100 */;
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
      .left > div, a > div{
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
        // background: url('./assets/logo.png') no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 87px;
        display: flex;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        h2{
          position: absolute;
          font-size: 12px;
          bottom: 1px;
          width: 100%;

        }
      }
      .user{
        flex: 263;
        display: flex;
        align-items: center;
        .icon{
          flex: 1;
          display: flex;
          justify-content: flex-end;
          img{
            width:16px;
            height:18px;
          }
        }
        h2{
          flex: 3;
          width:127px;
          font-size:12px;
          font-family:MicrosoftYaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
        }
        .logout{
          flex: 1
        }
      }
    }
</style>

<style>
*{
  margin: 0;
  /* transition: .4s; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  background: url('./assets/all_bg.png') no-repeat;
  background-size: 100% 100%;
}
#nav{
  flex: 110;
  /* min-height: 85px; */
}
.left-actived{
  background: url('./assets/left_nav_h.png')  no-repeat !important;
  background-size: 100% 100%!important;
}
.right-actived{
  background: url('./assets/right_nav_h.png')  no-repeat !important;
  background-size: 100% 100%!important;
}

.modal{
  position: absolute;
}
</style>
