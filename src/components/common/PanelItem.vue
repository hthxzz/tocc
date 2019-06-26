<template>
    <div class="panel-item-container">
        <div class="panelTitle-wrap">
            <panelTitle title="区域车流量统计" @showPanel='showPanel'></panelTitle>
        </div>
        <div class="PanelContent-wrap"  ref="PanelContentwrap">
            <PanelContent>
                <slot></slot>
            </PanelContent>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
import panelTitle from "../../components/index/panelTitle.vue";
import PanelContent from "./PanelContent.vue";
    export default {
        name: '',
        components: {
            panelTitle,
            PanelContent
        },
        methods: {
          showPanel(){
              if(this.show){
                  this.$refs.PanelContentwrap.style.maxHeight = this.proheight;
                  this.show = false;
                  console.log('aaaaaaaaaaaaaaaaaaaa');
                  
              }else{
                  this.$refs.PanelContentwrap.style.maxHeight = this.height +'px';
                  this.show = true;
              }
              
          }  
        },
        mounted () {
            this.height = this.$refs.PanelContentwrap.getBoundingClientRect().height;
            this.$refs.PanelContentwrap.style.maxHeight = this.height +'px';
        },

        data() {
            return {
                proheight: 0,
                height: 0,
                show:true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .panel-item-container{
        width: 100%;
        // height: 100%;
        border: 1px solid rgba(32, 86, 221, 0.4);
        box-sizing: border-box;
        background:rgba(5,12,38,.4);
        position: relative;
        .panelTitle-wrap{
            margin: 0 20px;
        }
        .PanelContent-wrap{
            overflow-y: hidden;
            transition: all 0.6s;
        }
        span{
            position: absolute;
            background-color: #2056DD;
        }
        span:nth-child(1){
            width: 16px;
            height: 1px;
        }
    }
</style>