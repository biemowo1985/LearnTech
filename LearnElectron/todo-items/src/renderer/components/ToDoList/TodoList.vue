<template>
  <div id="TodoList">
    <Header></Header>
    <el-button size="mini" icon="el-icon-search" @click="mytest"></el-button>
    <el-collapse v-model="activedForm" accordion>
      <el-collapse-item>
        <template slot="title">
          <i class="el-icon-circle-plus-outline" size="medium">Add New Event</i>
        </template>
        <div>
          <el-form ref="form" :model="eventDoc" @submit="addEvent" label-width="80px" size="mini">
            <el-form-item label="Event Title:">
              <el-input v-model="eventDoc.title"></el-input>
            </el-form-item>
            <el-form-item label="Content:">
              <el-input type="textarea" id="eventContent" v-model="eventDoc.content"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addEvent">Add</el-button>
              <el-button @click="hideForm">Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-alert title="To Do Events" type="success" :closable="false"></el-alert>
    <div v-if="todoList.length <= 0" style="width:100%; text-align:center;">
      <p>No Data.</p>
    </div>
    <el-collapse accordion v-if="todoList.length > 0">
      <el-collapse-item v-for="(item,key) in todoList" :key="key">
        <template slot="title">
          <el-checkbox @change="updateEventState(item)" v-model="item.completed">{{item.title}}</el-checkbox>
        </template>
        <div class="item-content">
          <p>{{item.content}}</p>
        </div>
      </el-collapse-item>
    </el-collapse>
    <br>
    <hr>
    <br>
    <el-alert title="Completed Events" type="info" :closable="false"></el-alert>
    <div v-if="finishedList.length <= 0" style="width:100%; text-align:center;">
      <p>No Data.</p>
    </div>
    <el-collapse accordion v-if="finishedList.length > 0">
      <el-collapse-item v-for="(item,key) in finishedList" :key="key">
        <template slot="title">
          <el-checkbox @change="updateEventState(item)" v-model="item.completed">{{item.title}}</el-checkbox>
        </template>
        <div class="item-content">
          <p>{{item.content}}</p>
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
      eventDoc: {
        title: "",
        content: "",
        completed: false,
        recordActive: true,
        addedTime: new Date().valueOf()
      },
      finishedList: [],
      todoList: [],
      checked: true,
      activedForm: ["1"]
    };
  },
  components: { Header },
  methods: {
    addEvent() {
      var doc = this.eventDoc;
      this.$db.insert(doc, err => {
        if (err) {
          console.log(err);
        } else {
          this.hideForm();
          this.loadTodoList();
        }
      });
    },

    loadTodoList() {
      this.$db
        .find({ completed: false })
        .sort({ addedTime: -1 })
        .exec((err, docs) => {
          if (err) {
            console.log(err);
          } else {
            this.todoList = docs;
          }
        });
    },

    loadCompletedList() {
      this.$db
        .find({ completed: true })
        .sort({ addedTime: -1 })
        .exec((err, docs) => {
          if (err) {
            console.log(err);
          } else {
            this.finishedList = docs;
          }
        });
    },

    updateEventState(item) {
      this.$db.update({ _id:item._id }, { $set: { completed:item.completed } }, (err)=> {
        if(err)
        {
          console.log(err);
        }
        else{
          this.loadTodoList();
          this.loadCompletedList();
        }
      });
    },

    hideForm() {
      this.eventDoc.title = "";
      this.eventDoc.content = "";
      this.activedForm = ["2"];
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
  },
  mounted() {
    this.loadTodoList();
    this.loadCompletedList();
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
#eventContent {
  resize: none !important;
  height: 100px;
}
</style>
