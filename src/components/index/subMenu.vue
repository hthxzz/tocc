<template>
    <div class="wrapper"  v-bind:style="{top:positin[1] + 'px',left:positin[0] - elementWidth/2 < 10 ? 10 : positin[0] - elementWidth/2 +'px',visibility:visibility}" @mouseover="showMenu" @mouseleave="hideMenu">
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
                // elementWidth: 0,
            }
        },
        created () {
            console.log('menugeta');
        let that = this;
          this.$http.$get("getMenu",{status:123456}).then((params)=>{
              console.log("aaaaaaaaaaaaaaaa");
              
              console.log(this);
            //   console.log(that);
              
                // console.log(params);
                
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
                console.log('com');
                
                let hoc = this.$store.state.app.hoverMenuEle
                 return this.$store.state.app.menuList[hoc];
            },
            elementWidth(){
                return this.$store.state.app.menuWrapperSize.width;
            }
        },
        mounted () {
            if (this.$store.state.app.hoverMenuEle != "index") {
                let wrapper = document.querySelector('.wrapper');
                this.elementWidth = wrapper.getBoundingClientRect().width;  
            }
          
          
        },
        methods: {
            goto(event){
                let currentActiveMenuEle = this.$store.state.app.currentActiveMenuEle;
                let preActiveMenuEle = this.$store.state.app.preActiveMenuEle;
                this.$store.state.app.menushow = false;
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
                // this.elementHeight =document.querySelector('.wrapper').getBoundingClientRect().width; 
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
        // visibility:hidden;
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
