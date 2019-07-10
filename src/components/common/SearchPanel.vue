<template>

  <div class="search-panel-container">
    <div class="wrap">
      <div class="item" v-for="item in itemConfigList" :style="{width:item.width}">
        <el-select v-if="item.type == 'select' "  v-model="searchData[item.VModelvalue.name]" placeholder="请选择">
          <el-option
            v-for="item in item.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        
        <el-input
          v-if="item.type == 'input'"
          v-model="searchData[item.VModelvalue.name]"
          :placeholder="item.placeholder || '请输入内容'"
        ></el-input>
        <el-radio v-if="item.type == 'radio'" v-model="searchData[item.VModelvalue.name]" label="1">备选项</el-radio>
        <el-radio v-if="item.type == 'radio'" v-model="searchData[item.VModelvalue.name]" label="2">备选项</el-radio>
        <el-date-picker
          v-if="item.type == 'date'"
          v-model="searchData[item.VModelvalue.name]"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        ></el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      searchConfig:{

      }
  },
  watch: {
    searchData: {
      handler(newData, oldData) {
        console.log(newData);
        this.$emit("search", newData);
      },
      deep: true
    }
  },
  data() {
    let searchConfig = this.$props.searchConfig;
    let searchConfigData = {};
    searchConfig.forEach(element => {
        searchConfigData[element.VModelvalue.name] = element.VModelvalue.defaultValue
    });
    return {
      searchData: {
        ...searchConfigData


      },
      itemConfigList: this.$props.searchConfig
    };
  }
};
</script>

<style lang="scss" scoped>
.search-panel-container {
  width: 100%;
  height: 100%;
  .wrap {
    display: flex;
    .item {
      align-self: center;
      margin-left: 10px;
    }
  }
}
</style>