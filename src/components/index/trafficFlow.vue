<template>
    <div class="container">
        <div class="trafficFlow"></div>
    </div>
</template>

<script>
import echarts  from 'echarts';
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted () {
            var myChart = echarts.init(document.querySelector(".trafficFlow"));
            var option = {
                xAxis: {
                    type: 'category',
                    data: ["绕城内","绕城外","三环内", "三环外", "进城","出城"]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 130, 123, 80, 70, 89],
                    type: 'bar',
                    barWidth:16,
                    itemStyle:{
                        color:"#2056DD"
                    }
                },
                {
                    data: [91, 126, 106, 96, 73, 110],
                    type: 'bar',
                    barWidth:16,
                    itemStyle:{
                        color:"#FFFF00"
                    }
                },
            
                
                
                ]
            };


             myChart.setOption(option);
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        .trafficFlow{
            width: 100%;
            height: 100%;
        }
    }
</style>