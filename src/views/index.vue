<template>
    <div class="container">
        <div class="left-panel panel">
            <div class="first item">
                <span></span>
                <panelTitle title="人口迁移人数统计"></panelTitle>
                <div class="content">
                    <div class="title">
                        <h2>交通方式</h2>
                        <h2>迁入</h2>
                        <h2>迁出</h2>
                        <h2>TOP5</h2>
                    </div>
                    <div class="char">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="second item"></div>
            <div class="three item"></div>
        </div>
        <div class="content">
            <div class="map-wrap"></div>
            <div class="speed"></div>
        </div>
        <div class="right-panel panel">
            <div class="first item">
                <span></span>
            </div>
            <div class="second item"></div>
            <div class="three item"></div>
        </div>
    </div>
</template>

<script>
import panelTitle from "../components/index/panelTitle.vue";
    export default {
        name: '',
        components: {
            panelTitle
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        height:100%;
        width: 100%;
        display: flex;
        .panel{
            flex: 410;
            margin-left: .1rem /* 10/100 */;
            display: flex;
            flex-direction: column;
            .item{
                // width:410px;
                // height:342px;
                background:rgba(5,12,38,1);
                border:1px solid rgba(32,86,221,1);
                // opacity:0.4;
            }

            .first{
                flex: 1;
                .content{
                    .title{
                        // width:133px;
                        // height:16px;
                        font-size:16px;
                        font-family:MicrosoftYaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:30px;
                    }
                }
            }
            .first::before{
                width: 1px;
                content: '';
                height: 1px;
            }
            .second{
                flex: 1;
                margin-top: .1rem /* 10/100 */;
            }
            .three{
                flex: 1;
                margin-top: .1rem /* 10/100 */;
            }
        }
        .content{
            flex: 1060;
            display: flex;
            flex-direction: column;
            margin: 0 0 0 10px;
            .map-wrap{
                flex: 681;
                // width:1060px;
                // height:682px;
                background:radial-gradient(circle,rgba(32,86,221,1),rgba(7,22,54,1));
                border:1px solid rgba(32,86,221,1);
                opacity:0.4;
            }
            .speed{
                flex: 268;
                margin-top: 10px;
                // width:1060px;
                // height:269px;
                background:rgba(5,12,38,1);
                border:1px solid rgba(32,86,221,1);
                opacity:0.4;
            }
        }
        .right-panel{
            margin-right: 10px;
        }
    }
</style>