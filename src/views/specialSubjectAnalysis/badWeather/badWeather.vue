<template>
    <div class="major-activities-index-container">
        <baseLayoutCntent>
            <template #leftPanel >
                <panel>
                    <PanelItem title="车辆行驶速度变化">
                        <div class="testechar">
                            <!-- <v-chart :options="polar"/> -->
                        </div>
                        
                    </PanelItem>
                    <PanelItem title="车流量占比">
                        <div class="content">路网运行监测</div>
                    </PanelItem>
                    <PanelItem title="突发交通拥堵统计">
                        <div class="content">突发交通拥堵统计</div>
                    </PanelItem>
                </panel>  
            </template>
            <template #midContent >
                bbbbbbbbb
            </template>
            <template #rightPanel >
                cccccccccccc
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
    .major-activities-index-container{
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