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
        <el-table :data="tableData" border="true" style="width: 100%">
          <el-table-column prop="FormularyID" label="ID" width="180"></el-table-column>
          <el-table-column prop="BrandName" label="Brand Name" width="180"></el-table-column>
          <el-table-column prop="CommonName" label="Common Name"></el-table-column>
          <el-table-column prop="Active" label="Active"></el-table-column>
          <el-table-column prop="TimeStamp" label="Date"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
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
      pageIndex: 1
    };
  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页:${val}`);
      }
  }
};
</script>

<style>
/* CSS */
</style>
