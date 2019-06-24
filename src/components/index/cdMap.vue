<template>
    <div class="container">
        <div class="cdmap">
            a
        </div>
    </div>
</template>

<script>
import echarts  from 'echarts';
import {data}  from "../../test/510100.js";
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted () {
            var myChart1 = echarts.init(document.querySelector(".cdmap"));
            var option = {
                series: [{
                    type: 'map',
                    map: data
                }]
            }
             myChart1.setOption(option);
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width:100%;
        height:100%;
        .cdmap{
            width:100%;
            height:100%;
        }
    }
</style>