<template>
  <div id="request_api">
    <el-row>
      <el-col :span="16">
        <el-form :inline="true" :label-position="right" label-width="80px" :model="formLabelAlign">
          <el-form-item label="Drug Name">
            <el-input v-model="search_common_name" size="small" placeholder="Drug Name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="small" plain>Search</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          :data="tableData"
          stripe="true"
          highlight-current-row="true"
          border="true"
          style="width: 100%"
        >
          <el-table-column prop="formularyID" label="ID" width="60"></el-table-column>
          <el-table-column prop="brandName" label="Brand Name" ></el-table-column>
          <el-table-column prop="commonName" label="Common Name" ></el-table-column>
          <el-table-column prop="active" label="Active" width="60" :formatter="activeFormat"></el-table-column>
          <el-table-column prop="timeStamp" label="Date" width="120" :formatter="datetimeFormat"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row justify="center" style="text-align:center;margin-top:10px;">
      <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Request API Component",
      search_common_name: "",
      tableData: [],
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.requestData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.requestData();
    },
    activeFormat(row, column, cellValue, index) {
      if (cellValue) {
        return cellValue.toString();
      } else {
        return "";
      }
    },
    datetimeFormat(row, column, cellValue, index) {
      var result = this.$fecha.format(new Date(cellValue), "MM/DD/YYYY");
      return result;
    },
    requestData() {
      var pagedObj = { PageIndex: this.pageIndex, PageSize: this.pageSize };
      var api = "https://localhost:44338/api/values/query"; //?PageIndex=2&PageSize=5";
      //var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http
        .get(api, {
          params: pagedObj
        })
        .then(response => {
          // handle success
          this.tableData = response.data.dataResult;
          this.totalCount = response.data.totalCount;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
  },
  mounted() {
    this.requestData();
  }
};
</script>

<style>
/* CSS */
#request_api {
  margin: 5px;
}
</style>
