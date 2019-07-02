<template>
    <div class="share-bike-service-index-container">
        <div class="share-bike-service-index-wrap">
            <div class="share-bike-left">
                cccccccccccccccccccccc
            </div>
            <div class="share-bike-right">
                <div class="item">111111111qq</div>
                <div class="item">aaaaaaaaa</div>
                <div class="item">bbbbbbbbbb</div>
            </div>
        </div>
    </div>
</template>
 共享单车
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
    .share-bike-service-index-container{
        width: 100%;
        height: 100%;
        .share-bike-service-index-wrap{
            width: 100%;
            height: 100%;
            display: flex;
            .share-bike-left{
                border: $base-border;
                flex: 895;
            }
            .share-bike-right{
                flex: 946;
                margin: 0 10px;
                display: flex;
                flex-direction: column;
                .item{
                    border: $base-border;
                    flex: 1;
                }
                .item:not(:first-child){
                    margin-top: 10px;
                }
            }

        }
    }
</style>