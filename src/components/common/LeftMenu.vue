<template>
    <div class="left-menu-containe">
        <div class="left-menu-wrap">
            <div class="item" :key="item.id" v-for="item in leftMenuList">
                <img :src="item.picSrc" alt="" >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                leftMenuList: [{

                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .left-menu-containe{
        width: 100%;
        height: 100%;
        .left-menu-wrap{
            display: flex;
            flex-direction: column;
            position: relative;
        }
    }
</style>