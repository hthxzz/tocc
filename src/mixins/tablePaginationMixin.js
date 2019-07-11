export default {
    data () {
        return {
            total:600,
            pageSize:10,
            url:'',
            tableData:[],
            currentPage:1
        }
    },
    created () {
        this.fetchTableData();
    },
    methods: {
        handleSizeChange(pageSize) {
            this.pageSize = pageSize
             console.log(val);
        },
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
             console.log(currentPage);
        },
        handlePrevClick(PrevPage) {
            this.currentPage = PrevPage;
             console.log(PrevPage);
        },
        handleNextClick(nextPage) {
            this.currentPage = nextPage;
             console.log(nextPage);
        },
        fetchTableData(){
            this.$http.$get(this.url).then((data) => {
                console.log(data);
                
                this.tableData = data.data.tableData;
            })
        }
    },
    watch: {
        currentPage(){
            this.fetchTableData();
        },
        pageSize(){
            this.fetchTableData();
        }
    }
}