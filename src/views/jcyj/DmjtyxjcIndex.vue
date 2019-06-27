<template>
    <div class="dmjtyxjc-index-container">
            <div class="left panel">
                <panel>
                    <PanelItem title="总客流量统计">
                        <div class="content">11111111111111</div>
                    </PanelItem>
                    <PanelItem title="站点客流量统计">
                        <div class="content">22222222222222</div>
                    </PanelItem>
                    <PanelItem title="线路客流量统计">
                        <div class="content">33333333333</div>
                    </PanelItem>
                    <PanelItem title="公交站点换乘客流量统计">
                        <div class="content">22222222222222</div>
                    </PanelItem>
                    <PanelItem title="公交站点换乘客流量统计 拷贝">
                        <div class="content">33333333333</div>
                    </PanelItem>
                </panel>          
            </div>
            <div class="mid">
                <VerticesBorderStyle/>
            </div>
            <div class="right panel">
                <panel>
                    <PanelItem :showTitleName='false'>
                        <div class="content">11111111111111</div>
                    </PanelItem>
                    <PanelItem title="重点关注视频">
                        <div class="content">22222222222222</div>
                    </PanelItem>
                    <PanelItem title="运力投放情况">
                        <div class="content">33333333333</div>
                    </PanelItem>
                    <PanelItem title="运营平均速度">
                        <div class="content">666666666665555</div>
                    </PanelItem>
                </panel>
            </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dmjtyxjc-index-container{
        width: 100%;
        height: 100%;
        display: flex;
        .panel{
            flex: 410;
            display: flex;
            flex-direction: column;
            // margin-top: 10px;
            padding-top: 10px;
        }
        .left{
            flex: 410;
        }
        .mid{
            flex: 1011;
            margin: 10px 10px 0  0;
            position: relative;
            border: 1px solid rgba(32, 86, 221, 0.4);
        }  
        .content{
            height: 256px;
            color: aliceblue;
        }
        .right{
            flex: 410;
        } 
    }
</style>