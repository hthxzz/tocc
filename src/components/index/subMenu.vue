<template>
    <div class="wrapper"  v-bind:style="{top:positin[1] + 'px',left:positin[0] - elementHeight/2 < 10 ? 10 : positin[0] - elementHeight/2 +'px',visibility:visibility}" @mouseover="showMenu" @mouseleave="hideMenu">
        <span class="tran"  v-bind:style="{top:positin[1] -10 + 'px',left:positin[0] - 16 +'px'}"></span>
        <div class="item" :key="item.id" v-for="(item) in menuList" @click="goto($event)">
            <router-link :to="{path:item.route}" replace>
                <img :src="(item.icon)" alt="">
                <h2>{{item.title}}</h2>
            </router-link>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                // menuList:[
                //     {"id":"1","title":"居民出行监测","icon":require("../../assets/index/menu/jmcx.png"),"route":"/jmcxjc"},
                //     {"id":"2","title":"路网运行监测","icon":require("../../assets/index/menu/lwyx.png"),"route":"/roadnetworkrunmonitor/a"},
                //     {"id":"3","title":"重点运输车辆监测","icon":require("../../assets/index/menu/zdyscl.png"),"route":"/roadnetworkrunmonitor/KeyTransportVehiclesIndex"},
                //     {"id":"4","title":"交通运输驾驶员","icon":require("../../assets/index/menu/jtysjsy.png"),"route":"jtysjsy"},
                //     {"id":"5","title":"地面公共交通运行监测","icon":require("../../assets/index/menu/dmgj.png"),"route":"dmjtyxjc"},
                //     {"id":"6","title":"出租车运行监测","icon":require("../../assets/index/menu/czc.png"),"route":"czc"},
                //     {"id":"8","title":"轨道交通运行监测","icon":require("../../assets/index/menu/gdjt.png"),"route":"gdjt"},
                //     {"id":"9","title":"慢行交通运行监测","icon":require("../../assets/index/menu/mxjt.png"),"route":"/roadnetworkrunmonitor/slowTrafficMonitorIndex"},
                //     {"id":"10","title":"静态交通运行监测","icon":require("../../assets/index/menu/jtjt.png"),"route":"jtjt"},
                //     {"id":"11","title":"航空运输运行监测","icon":require("../../assets/index/menu/hkys.png"),"route":"hkys"},
                //     {"id":"12","title":"铁路运输运行监测","icon":require("../../assets/index/menu/tlys.png"),"route":"tlys"},
                //     {"id":"13","title":"公路运输运行监测","icon":require("../../assets/index/menu/glys.png"),"route":"glys"},
                //     {"id":"14","title":"新能源车运行监测","icon":require("../../assets/index/menu/xnyc.png"),"route":"xnyc"},
                //     {"id":"15","title":"分时租赁车辆","icon":require("../../assets/index/menu/fszlcl.png"),"route":"fszlcl"},
                //     {"id":"16","title":"重点设施运行监测","icon":require("../../assets/index/menu/zdss.png"),"route":"zdss"},
                //     {"id":"17","title":"行业静态信息监测","icon":require("../../assets/index/menu/hyjtxx.png"),"route":"hyjtxx"},
                //     {"id":"18","title":"驾培维修运行监测","icon":require("../../assets/index/menu/jpwx.png"),"route":"jpwx"}
                    
                // ],
                elementHeight: 0
            }
        },
        created () {
          this.$axios.get("getmenu").then(function (params) {
              console.log(params);
              
          });
        },
        props: {
            positin:{
                type: Array
            },
            show:{
            default:false,
            type:Boolean
        }},
        computed: {
            visibility:function () {
                return this.show ? "visible" : "hidden";
            },
            menuList(){
                let hoc = this.$store.state.app.hoverMenuEle
                 return this.$store.state.app.menuList[hoc];
            }
        },
        mounted () {
          let wrapper = document.querySelector('.wrapper');
        //   wrapper.style.visibility = 'hidden';
          this.elementHeight = wrapper.getBoundingClientRect().width;  
        },
        methods: {
            goto(event){
                // this.$router.push();
                // switchMenuShow
                console.log('tttttttttt');
                event.currentTarget.querySelector('h2').innerHTML;
                let currentActiveMenuEle = this.$store.state.app.currentActiveMenuEle;
                let preActiveMenuEle = this.$store.state.app.preActiveMenuEle;
                if (this.contentOfLeftMenu(currentActiveMenuEle.classList[0])) {
                    this.$store.state.app.currentActiveMenuEle.classList.add("left-actived");
                    preActiveMenuEle.classList.remove("left-actived");
                }else{
                    this.$store.state.app.currentActiveMenuEle.classList.add("right-actived");
                    preActiveMenuEle.classList.remove("right-actived");
                }
                
                this.$store.state.app.preActiveMenuEle = currentActiveMenuEle
                this.$store.state.app.currentActiveMenuTitle =  event.currentTarget.querySelector('h2').innerHTML;
            },
            contentOfLeftMenu(selectEleClass){
              const   leftmenu = ["jcyj","ztjc"];
              return  leftmenu.indexOf(selectEleClass) != -1 ? true:false;
            },
            contentOfRightMenu(selectEleClass){
                const   rightmenu = ["yjxt","xxfb","fzjc"];
                return  rightmenu.indexOf(selectEleClass) != -1 ? true:false;
            },
            showMenu(){
                this.$store.state.app.menushow = true;
                this.elementHeight =document.querySelector('.wrapper').getBoundingClientRect().width; 
            },
            hideMenu(){
            this.$store.state.app.menushow = false;
          }
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper{
        position: absolute;
        // top: 90px;
        // width:1821px;
        // height:471px;
        visibility:hidden;
        flex-wrap: wrap;
        max-width: 1690px;
        display:flex;
        background:rgba(5,12,38,1);
        border:1px solid rgba(32,86,221,1);
        opacity:0.9;
        span{
            position: fixed;
            width: 0;
            height: 0;
            border-width: 0 10px 10px;
            border-style: solid;
            border-color: transparent transparent rgba(32, 86, 221, 1);
            left: 300px;
            // top: -11px;
        }
        .item{
            width: 1.6rem;
            height: 2rem;
            margin: .21rem;
            border:1px solid rgba(32,86,221,1);
            background:linear-gradient(0deg,rgba(32,86,221,1),rgba(0,150,255,1));
            // opacity:0.2;
            background: url('../../assets/index/menu/list_bg.png') no-repeat;
            background-size: 100% 100%;
            &:hover{
                background: url('../../assets/index/menu/list_bg_h.png') no-repeat;
                cursor: pointer;
                 background-size: 100% 100%;
                transform: scale(1.1);
            }
            img{
                width:100px;
                height:100px;
                margin-top: .3rem;
                background:rgba(255,255,255,1);
                box-shadow:0px 5px 10px 0px rgba(31, 166, 111, 0.35);
                border-radius:50%;
            }
            h2{
                font-size:16px;
                font-family:MicrosoftYaHei-Bold;
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:30px;
                text-shadow:0px 1px 3px rgba(31, 92, 36, 0.35);
            }
        }
    }
</style>
