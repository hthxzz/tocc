<template>
    <div class="road-network-run-monitor-container">
        <div class="road-network-left-float-menu">
            <LeftMenu></LeftMenu>
        </div>
        <div class="road-network-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import LeftMenu from "../../../components/common/LeftMenu.vue";
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
    .road-network-run-monitor-container{
        display: flex;
        height: 100%;
        width: 100%;
        .road-network-left-float-menu{
            flex: 59;
            min-width: 59px;
            z-index: 666;
            position: relative;
        }
        .road-network-content{
            flex: 1861;
            position: relative;
        }
    }
</style>