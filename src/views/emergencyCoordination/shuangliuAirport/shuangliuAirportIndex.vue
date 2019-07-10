<template>
    <div class="shuangliu-airport-index-container">
        <baseLayoutCntent>
            <template #leftPanel >
                <panel>
                    <PanelItem title="车流量统计">
                        <div class="testechar">
                        </div>
                        
                    </PanelItem>
                    <PanelItem title="车流量占比">
                        <div class="content">路网运行监测</div>
                    </PanelItem>
                    <PanelItem title="平均速度">
                        <div class="content">路网运行监测</div>
                    </PanelItem>
                </panel> 
            </template>
            <template #midContent >
                bbbbbbbbb
            </template>
            <template #rightPanel >
                <panel>
                    <PanelItem  title="拥堵路段TOP10">
                        <div class="content">
                            <ydld />
                        </div>
                    </PanelItem>
                    <PanelItem title="交通事故事件统计">
                        <div class="content">22222222222222</div>
                    </PanelItem>
                    <PanelItem title="预警预测统计">
                        <div class="content">33333333333</div>
                    </PanelItem>
                </panel>
            </template>
        </baseLayoutCntent>
        <div class="dialog">
            aaaaaaaaaaaaaa
        </div>
    </div>
</template>

<script>
import baseLayoutCntent from "../../layOut/baseLayoutCntent.vue";
    export default {
        name: '',
        components: {
            baseLayoutCntent
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shuangliu-airport-index-container{
        width: 100%;
        height: 100%;
    }
    .dialog{
        background-color: aqua;
        position: fixed;
        left: 50%;
        top: 50%;
    }
</style>