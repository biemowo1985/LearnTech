<template>
  <div id="TodoList">
    <Header></Header>
    <el-button icon="el-icon-plus" @click="addEvent" size="mini" plain></el-button>
    <el-button icon="el-icon-error" @click="clearAll" size="mini" plain></el-button>
    <el-button icon="el-icon-info" @click="mytest" size="mini" plain></el-button>
    <el-alert title="To Do Events" type="success" :closable="false"></el-alert>
    <el-collapse accordion>
      <!-- <el-collapse accordion v-if="todoList.length > 0"> -->
      <el-collapse-item>
        <template slot="title">
          <el-checkbox v-model="checked">一致性 Consistency</el-checkbox>
        </template>
        <div class="item-content">
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <el-checkbox v-model="checked">可控 Controllability</el-checkbox>
        </template>
        <div class="item-content">
          <p>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</p>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <el-checkbox v-model="checked">效率 Efficiency</el-checkbox>
        </template>
        <div class="item-content">
          <p>简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p>
        </div>
      </el-collapse-item>
    </el-collapse>
    <br>
    <hr>
    <br>
    <el-alert title="Completed Events" type="info" :closable="false"></el-alert>
    <el-collapse accordion>
      <!-- <el-collapse accordion v-if="finishedList.length > 0"> -->
      <el-collapse-item>
        <template slot="title">
          <el-checkbox v-model="checked">一致性 Consistency</el-checkbox>
        </template>
        <div class="item-content">
          <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <el-checkbox v-model="checked">可控 Controllability</el-checkbox>
        </template>
        <div class="item-content">
          <p>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</p>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <el-checkbox v-model="checked">效率 Efficiency</el-checkbox>
        </template>
        <div class="item-content">
          <p>简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  data() {
    return {
      finishedList: [],
      todoList: [],
      checked: true
    };
  },
  components: { Header },
  methods: {
    addEvent() {
      var doc = {
        title: "world",
        content: "",
        completed: false,
        recordActive: true,
        addedTime: new Date().toLocaleString()
      };
      this.$db.insert(doc, function(err) {
        if (err) {
          alert(err.message);
        } else {
          alert("ok");
        }
      });
    },

    mytest() {
      this.$db.find({}, function(err, docs) {
        if (err) {
          alert(err.message);
        } else {
          var result = "";
          docs.forEach(element => {
            result += element._id + " | ";
          });
          alert(result);
        }
      });
    },

    //clear
    clearAll() {
      this.$db.remove({}, { multi: true }, function(err, numRemoved) {
        if (err) {
          alert(err.message);
        } else {
          alert("cleared");
        }
      });
    }
  }
};
</script>

<style>
.item-content {
  border: 1px solid #abbcd3;
  border-radius: 3px;
  padding: 0 10px;
}
.el-alert__title {
  font-size: 18px !important;
}
</style>
