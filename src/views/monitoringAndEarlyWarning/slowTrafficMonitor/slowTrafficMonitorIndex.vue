<template>
    <div class="slow-traffic-monitor-index-container">
        <baseLayoutCntent>
            <template #leftPanel >
                aaaaaaaa
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
    .slow-traffic-monitor-index-container{
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