<template>
    <div class="dmjtyxjc-container">
        <div class="dmjtyxjc-left-float-menu">
            a
        </div>
        <div class="dmjtyxjc-content">
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
    .dmjtyxjc-container{
        display: flex;
        height: 100%;
        width: 100%;
        .dmjtyxjc-left-float-menu{
            flex: 59;
            min-width: 59px;
        }
        .dmjtyxjc-content{
            flex: 1861;
        }
    }
</style>