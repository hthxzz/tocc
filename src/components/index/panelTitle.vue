<template>
    <div class="container">
        <div class="wrap">
            <span class="pro"></span>
            <h2>{{title}}</h2>
            <span class="tip"></span>
            <span class="info"></span>
        </div>
        
        <div class="line">
            <div class="cntent"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: ["title",""],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: column;
        .wrap{
            width: 4.1rem;
            height: .47rem;
            display: flex;

            .pro{
                width:6px;
                height:20px;
                margin-left: .23rem;
                margin-top: .23rem;
                display: inline-block;
                background:rgba(32,86,221,1);
            }
            .tip{
                width: 12px;
                height: 14px;
                 margin-top: .23rem;
                 margin-left: 10px;
                background: url('../../assets/index/index/trans.png') no-repeat;
                background-size: 100% 100%;
            }
            h2{
                width:1.52rem;
                height:.19rem;
                margin-top: .23rem;
                margin-left: .08rem;
                display: inline-block;
                font-size:18px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(255,255,255,1);
                // line-height:30px;
            }
            .info{
                width: 23px;
                height: 5px;
                 margin-top: .23rem;
                 margin-right: 20px;
                background: url('../../assets/index/index/more.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        .line{
            width: 100%;
            margin-top: 8px;
            display: flex;
            .cntent{
                width:370px;
                height:1px;
                justify-content: center;
                margin-left: 14px;
                background:rgba(32,86,221,1);
            }
        }
    }
</style>