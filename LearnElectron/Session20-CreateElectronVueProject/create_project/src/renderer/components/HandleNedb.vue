<template>
  <div id="db_helper">
    <el-row>
      <el-col :span="8">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="Username">
            <el-input v-model="formLabelAlign.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="formLabelAlign.password" type="password"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="16"></el-col>
    </el-row>
    <el-row style="margin-left:15px">
      <el-button size="small" @click="add" plain>Add</el-button>
      <el-button type="primary" @click="find" size="small" plain>Find</el-button>
      <el-button type="warning" @click="update" size="small" plain>Update</el-button>
      <el-button type="danger" @click="remove" size="small" plain>Delete</el-button>
      <el-button type="danger" @click="btnTest" size="small" plain>Test</el-button>
      <br>
      <router-link to="/home">Go home</router-link>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: "db handler Component",
      labelPosition: "right",
      formLabelAlign: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    add() {
      var username = this.formLabelAlign.username;
      var password = this.formLabelAlign.password;
      this.$db.insert(this.formLabelAlign, (err, data) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log(data);
        }
      });
    },
    find() {
      this.$db.find({}, (err, data) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log(data);
        }
      });
    },
    update() {
      this.$db.update(
        { username: "zhao" },
        { $set: { password: "123" } },
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          } else {
            console.log(data);
          }
        }
      );
    },
    remove() {
      this.$db.remove({ _id: "zE1LIDirASInF4HY" }, (err, data) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log(data);
        }
      });
    },

    btnTest(){
    
    }
  }
};
</script>

<style>
/* CSS */
</style>
