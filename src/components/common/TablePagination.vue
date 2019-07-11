<template>
    <div class="wrap">
        <SearchPanel></SearchPanel>
        <el-table
        :data="tableData" height="160"
        style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>

        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
        </el-table>

        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        @prev-click="handlePrevClick"
        @next-click="handleNextClick"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
</template>

<script>
import tablePaginationMixin from "@/mixins/tablePaginationMixin";
    export default {
        name: '',
        mixins: [tablePaginationMixin],
        data() {
            return {
                total:200,
                url:'getTableData'
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>