<template>
    <div class="road-network-index-container">
            <div class="left panel">
                <panel>
                    <PanelItem title="车流量统计">
                        <div class="content">路网运行监测</div>
                    </PanelItem>
                    <PanelItem title="车流量占比">
                        <div class="content">路网运行监测</div>
                    </PanelItem>
                    <PanelItem title="平均速度">
                        <div class="content">路网运行监测</div>
                    </PanelItem>
                </panel>          
            </div>
            <div class="mid">
                <VerticesBorderStyle/>
            </div>
            <div class="right panel">
                <panel>
                    <PanelItem  title="拥堵路段TOP10">
                        <div class="content">拥堵路段TOP10</div>
                    </PanelItem>
                    <PanelItem title="交通事故事件统计">
                        <div class="content">22222222222222</div>
                    </PanelItem>
                    <PanelItem title="预警预测统计">
                        <div class="content">33333333333</div>
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
    .road-network-index-container{
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