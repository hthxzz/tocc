<template>
    <div class="test">
        <SearchPanel @search="search" />
    </div>
</template>

<script>
    export default {
        name: '',
        methods: {
            
        },
        data() {
            return {
                search(data){
                    console.log(data);
                    
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>