<template>
    <div class="base-layout-content-container">
        <div class="left-panel panel">
            <slot name="leftPanel"></slot>
        </div>
        <div class="mid-content">
            <slot name="midContent"></slot>
        </div>
        <div class="right-panel panel">
            <slot name="rightPanel"></slot>
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
    .base-layout-content-container{
        width: 100%;
        height: 100%;
        display: flex;
        .panel{

        }
        .left-panel{
            flex: 410;
            // border: $base-border;
        }
        .mid-content{
            flex: 1011;
            border: $base-border;
            margin: 0 10px;
        }
        .right-panel{
            flex: 410;
            border: $base-border;
        }
    }
</style>