<template>
    <div class="wrapper" v-show="show" @mouseover="showMenu" @mouseleave="hideMenu">
        <span class="tran"></span>
        <div class="item" v-for="(item, index) in menuList" @click="goto()">
            <img :src="(item.icon)" alt="" width="100px" height="100px">
            <h2>{{item.title}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                menuList:[
                    {"title":"居民出行监测","bg-pic":"../../image/index/menu/list_bg.png","icon":require("../../assets/index/menu/jmcx.png")},
                    {"title":"路网运行监测","bg-pic":"../../image/index/menu/list_bg.png","icon":require("../../assets/index/menu/lwyx.png")},
                    {"title":"重点运输车辆监测","bg-pic":"../../image/index/menu/list_bg.png","icon":require("../../assets/index/menu/zdyscl.png")}
                ]
            }
        },
        props: {
            show:{
            default:false,
            type:Boolean
        }},
        methods: {
            goto(){
                this.$router.push();
            },
            showMenu(){
                this.$store.state.menushow = true;
            },
            hideMenu(){
            this.$store.state.menushow = false;
          }
        }

    }
</script>

<style lang="scss">
    .wrapper{
        position: absolute;
        top: 90px;
        // width:1821px;
        height:471px;
        display:flex;
        background:rgba(5,12,38,1);
        border:1px solid rgba(32,86,221,1);
        opacity:0.9;
        span{
            position: absolute;
            width: 0;
            height: 0;
            border-width: 0 10px 10px;
            border-style: solid;
            border-color: transparent transparent rgba(32, 86, 221, 1);
            left: 300px;
            top: -11px;
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
