<template>
    <div class="search-panel-container">
        <div class="wrap">
            <div class="item" v-for="item in itemConfigList">
                    <el-select v-if="item.type == 'select' " v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input  v-if="item.type == 'input'"    v-model="searchData.input" :placeholder="item.placeholder || '请输入内容'"></el-input>
                    <el-radio v-if="item.type == 'radio'" v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-if="item.type == 'radio'" v-model="radio" label="2">备选项</el-radio>
            </div>
         </div>
        
    </div>
</template>

<script>
    export default {
        name: '',
        props: {

        },
        watch: {
            searchData:{
                handler(newData, oldData){
                this.$emit("search",newData);
            },
            deep:true
            },
            
        },
        data() {
            return {
                searchData:{
                    input:'',
                },
                itemConfigList:[{
                    type:'input',placeholder:'输入......'
                },{
                    type:'select'
                },{
                    type:'radio'
                }
                ],
                
                radio: '1',
                 options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                    value: ''
                        }
        }
    }
</script>

<style lang="scss" scoped>
    .search-panel-container{
        width: 100%;
        height: 100%;
        .wrap{
            display: flex;
            .item{

            }
        }
    }
</style>