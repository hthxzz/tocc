<template>
    <div class="ground-bus-index-container">
        <div class="ground-bus-index-wrap">
            <div class="ground-bus-top">
                <div class="ground-bus-top-left">
                    <div class="content first"></div>
                    <div class="content second"></div>
                </div>
                <div class="ground-bus-right">
                    <div class="content three"></div>
                    <div class="content four"></div>
                </div>
            </div>
            <div class="ground-bus-bottom">
                <div id="map" class="map">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';


    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted () {
            new Map({
                target: 'map',
                layers: [
                    new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                    })
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 2
                })
                });
        }
    }
</script>

<style lang="scss" scoped>
    .ground-bus-index-container{
        width: 100%;
        height: 100%;
        .ground-bus-index-wrap{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .ground-bus-top{
                flex: 620;
                display: flex;
                
                .ground-bus-top-left{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    .first{
                        flex: 1;
                    }
                    .second{
                        flex: 1;
                        margin-top: 10px;
                    }

                }
                .ground-bus-right{
                    flex: 1;
                    display: flex;
                    margin-left: 10px;
                    flex-direction: column;
                    .three{
                        flex: 1;
                    }
                    .four{
                        flex: 1;
                        margin-top: 10px;
                    }
                }
            }
            .ground-bus-bottom{
                flex: 322;
                background:rgba(5,12,38,.2);
                border: $base-border;
                margin-top: 10px;
                position: relative;
                .map{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .content{
        border: $base-border;
        background:rgba(5,12,38,.2);
    }
</style>