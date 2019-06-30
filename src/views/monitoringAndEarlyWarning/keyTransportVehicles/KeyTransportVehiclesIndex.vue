<template>
    <div class="key-transport-vehicles-index-container">
        <div class="key-transport-vehicles-index-wrap">
            <div class="left panel">
                <VerticesBorderStyle />
            </div>
            <div class="right panel">
                <VerticesBorderStyle />
            </div>
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
    .key-transport-vehicles-index-container{
        height: 100%;
        width: 100%;
        .key-transport-vehicles-index-wrap{
            display: flex;
            height: 100%;
            width: 100%;
            .panel{
                border: $base-border;
                position: relative;
            }
            .left{
                flex: 410;
                
            }
            .right{
                flex: 1431;
                margin-left: 10px;
            }
        }
    }
</style>