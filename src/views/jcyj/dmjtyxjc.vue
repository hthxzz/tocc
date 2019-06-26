<template>
    <div class="cntainer">
        <div class="left panel">
            <div class="wrap-item">
                <div class="aaa">
                    <div class="item left-top">
                        <panelTitle title="区域车流量统计"></panelTitle>
                    </div>
                    <div class="item left-mid">2</div>
                    <div class="item left-bottom">3</div>
                </div>
          
            </div>
        </div>
        <div class="mid"></div>
        <div class="right panel">
            <panel>
                <div class="test">
                    <panelTitle title="区域车流量统计"></panelTitle>
                    <div class="panel-content">
                    <div class="pc">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>  
                </div>
                
                <div class="test">2</div>
                <div class="test">3</div>
            </panel>
            <!-- <div class="wrap-item">
                <div class="item right-top">4</div>
                <div class="item right-mid">5</div>
                <div class="item right-bottom">6</div>
            </div> -->

        </div>
    </div>
</template>

<script>
import panelTitle from "../../components/index/panelTitle.vue";
import panel from "../../components/common/panel.vue";
    export default {
        name: '',
        components: {
            panelTitle,
            panel
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cntainer{
        display: flex;
        height: 100%;
        width: 100%;
        .panel{
            flex: 410;
            display: flex;
            flex-direction: column;
            .wrap-item{
                height: 100%;
                .aaa{
                    height: 100%;
                    .item{
                        flex: 1;
                        
                        background:rgba(5,12,38,.4);
                        border:1px solid rgba(32,86,221,.4);
                        height: calc((100% - 40px)/3);
                        // opacity:0.4;
                    }
                    .item{
                        margin-top: 10px;
                    }
                }

            }

        }
        .left{

        }
        .mid{
            flex: 1011;
            margin: 10px;
            border: 1px solid rgba(32, 86, 221, 0.4);
        }  
        .right{
            flex: 410;
            margin: 10px;
            // max-width: 350px;
            // min-width: 450px;
            .test{
                // width: 100%;
                height: 600px;
                 border: 1px solid rgba(32, 86, 221, 0.4);
                 background:rgba(5,12,38,.4);
                 margin-top: 10px;
            }
        }      


    }
</style>