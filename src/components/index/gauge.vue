<template>
    <div class="container">
        <div class="gauge1"></div>
        <div class="gauge2">2</div>
        <div class="gauge3">3</div>
        <div class="gauge4">4</div>
        <div class="gauge5">5</div>
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
            var myChart1 = echarts.init(document.querySelector(".gauge1"));
            var myChart2 = echarts.init(document.querySelector(".gauge2"));
            var myChart3 = echarts.init(document.querySelector(".gauge3"));
            var myChart4 = echarts.init(document.querySelector(".gauge4"));
            var myChart5 = echarts.init(document.querySelector(".gauge5"));
            var option = {
                // backgroundColor: '#1b1b1b',
                tooltip : {
                    formatter: "{a} <br/>{c} {b}"
                },
                title:{
                    text:'一环',
                    left:'39%',
                    bottom:'-6%',
                    textStyle:{
                        color : '#FFFFFF',
                        fontSize : '14'
                    }
                },
                series : [
                    {
                        name:'速度',
                        type:'gauge',
                        min:0,
                        max:140,
                        splitNumber:7,
                        radius: '100%',
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                                width: 3,
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        pointer:{
                            // show:false,
                            width:6
                        },
                        axisLabel: {            // 坐标轴小标记
                            // textStyle: {       // 属性lineStyle控制线条样式
                            //     fontWeight: 'bolder',
                            //     color: '#fff',
                            //     shadowColor : '#fff', //默认透明
                            //     shadowBlur: 10
                            // }
                        },
                        axisTick: {            // 坐标轴小标记
                            length :8,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto',
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        splitLine: {           // 分隔线
                            length :11,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                width:3,
                                color: '#fff',
                                shadowColor : '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        // title : {
                        //     textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        //         fontWeight: 'bolder',
                        //         fontSize: 20,
                        //         fontStyle: 'italic',
                        //         color: '#fff',
                        //         shadowColor : '#fff', //默认透明
                        //         shadowBlur: 10
                        //     }
                        // },
                        detail : {
                            // backgroundColor: 'rgba(30,144,255,0.8)',
                            // borderWidth: 1,
                            fontSize:10,
                            // borderColor: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 5,
                            offsetCenter: [0, '70%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontWeight: 'bolder',
                                color: '#fff'
                            }
                        },
                        data:[{value: 40, name: 'km/h'}]
                    }
                
                ]
            };

                // myChart1.setOption(option);
                // myChart2.setOption(option);
                // myChart3.setOption(option);
                // myChart4.setOption(option);
                // myChart5.setOption(option);
            setInterval(function (){
                option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                myChart1.setOption(option);
                myChart2.setOption(option);
                myChart3.setOption(option);
                myChart4.setOption(option);
                myChart5.setOption(option);
            },2000)
        }
        
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        > div{
            // width: 160px;
            // height: 160px;
            flex: 1;
        }
    }
</style>