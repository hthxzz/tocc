<template>
    <div class="road-network-run-monitor-container">
        <div class="road-network-left-float-menu">
            a
        </div>
        <div class="road-network-content">
            <router-view></router-view>
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
    .road-network-run-monitor-container{
        display: flex;
        height: 100%;
        width: 100%;
        .road-network-left-float-menu{
            flex: 59;
            min-width: 59px;
        }
        .road-network-content{
            flex: 1861;
        }
    }
</style>