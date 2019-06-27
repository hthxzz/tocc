<template>
    <div class="panel-item-container">
        <div class="panelTitle-wrap">
            <panelTitle :title="title" :show='showTitleName' @showPanel='showPanel'></panelTitle>
        </div>
        <div class="PanelContent-wrap"  ref="PanelContentwrap">
            <PanelContent>
                <slot></slot>
            </PanelContent>
        </div>
        <!-- <span class="left-top-border-row"></span>
        <span class="left-top-border-col"></span>
        <span class="left-bot-border-row"></span>
        <span class="left-bot-border-col"></span>
        <span class="right-top-border-row"></span>
        <span class="right-bot-border-row"></span>
        <span class="right-top-border-col"></span>
        <span class="right-bot-border-col"></span> -->
        <VerticesBorderStyle></VerticesBorderStyle>
    </div>
</template>

<script>
import panelTitle from "../../components/index/panelTitle.vue";
import PanelContent from "./PanelContent.vue";
import VerticesBorderStyle from "./verticesBorderStyle.vue";
    export default {
        name: '',
        components: {
            panelTitle,
            PanelContent,
            VerticesBorderStyle
        },
        props: {
            showTitleName: {
                default: true
            },
            title: {
                default: '无标题'
            }
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
    @mixin row {
       width: 16px;
       height: 1px;
       background-color: rgba(32, 86, 221,1);
    }
    @mixin col {
       width: 1px;
       height: 16px;
       background-color: rgba(32, 86, 221,1);
    }
    .panel-item-container{
        width: 100%;
        // height: 100%;
        border: 1px solid rgba(32, 86, 221, 0.4);
        margin-bottom: 10px;
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
        // span{
        //     position: absolute;
        //     background-color: #2056DD;
        // }
        // .left-top-border-row{
        //     @include row;
        //     left:0;
        //     top:-1px;
        // }
        // .left-top-border-col{
        //     @include col;
        //     left:0;
        //     top:-1px;
        // }
        // .left-bot-border-row{
        //     @include row;
        //     left:0;
        //     bottom: -1px;
        // }  
        // .left-bot-border-col{
        //     @include col;
        //     left:0;
        //     bottom: 0;
        // }
        // .right-top-border-row{
        //     @include row;
        //     right: 0;
        //     top: -1px;
        // }  
        // .right-top-border-col{
        //     @include col;
        //     right:0;
        //     top: 0;
        // }   
        // .right-bot-border-col{
        //     @include col;
        //     right:0;
        //     bottom: 0;
        // }    
        // .right-bot-border-row{
        //     @include row;
        //     right:0;
        //     bottom: 0;
        // }  
    }
</style>