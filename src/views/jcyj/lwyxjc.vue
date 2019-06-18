<template>
    <div class="container">
        <div class="bar"></div>
        <div class="left panel">
            <div class="menu"></div>
            <div class="menu"></div>
            <div class="menu"></div>
        </div>
        <div class="mid"></div>
        <div class="right panel">
            <div class="menu"></div>
            <div class="menu"></div>
            <div class="menu"></div>
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
    .container{
        display: flex;
        .bar{
            flex: 59;
        }
        .left{
            flex: 410;
        }
        .panel{
            .menu{
                background:rgba(5,12,38,0.4);
                border:1px solid rgba(32,86,221,1);
            }

        }
        .mid{
             flex: 1011;
        }
        .right{
            flex: 410;
        }
    }
</style>