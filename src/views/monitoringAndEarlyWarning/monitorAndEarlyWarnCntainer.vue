<template>
    <div class="monitor-earlywarn-container">
        <div class="monitor-earlywarn-left-float-menu">
            <LeftMenu></LeftMenu>
        </div>
        <div class="monitor-earlywarn-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import LeftMenu from "@/components/common/LeftMenu.vue";
    export default {
        name: '',
        components: {
          LeftMenu  
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .monitor-earlywarn-container{
        display: flex;
        height: 100%;
        width: 100%;
        .monitor-earlywarn-left-float-menu{
            flex: 59;
            min-width: 59px;
            z-index: 666;
            position: relative;
        }
        .monitor-earlywarn-content{
            flex: 1861;
            position: relative;
        }
    }
</style>