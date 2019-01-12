<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/header">Header</router-link>
    <router-view></router-view>
    <!-- Session 02 Start -->
    <div class="Session">
      <h2>Session 02</h2>
      <p>Summary: Create Project</p>
      <div class="Summary">
        <p>1. Config Environment -- install Node.js</p>
        <p>
          2. Install vue-cli --
          <code>npm install vue-cli -g</code>
        </p>
        <p>3. Create Vue project --</p>
        <ol>
          <li>
            <code>vue init webpack my-project-name</code>
          </li>
          <li>
            <code>vue init webpack-simple my-project-name</code>
          </li>
        </ol>
        <p>
          4. Run Project --
          <code>npm run dev</code>
        </p>
      </div>
      <p>Content:</p>
      <div class="SessionContent">
        <p>None.</p>
      </div>
    </div>
    <hr>
    <!-- Session 02 End -->
    <!-- Session 03 Start -->
    <div class="Session">
      <h2>Session 03</h2>
      <p>Summary: Create Project</p>
      <div class="Summary">
        <p>1. Bind Data</p>
        <p>2. Bind Object</p>
        <p>3. v-for</p>
      </div>
      <p>Content:</p>
      <div class="SessionContent">
        <p>1. Bind Data -- {{msg}}</p>
        <p>2. Bind Object -- Name: {{obj.name}}, Age: {{obj.age}}</p>
        <div>
          <ul>
            <li v-for="item in list" :key="item.id">{{item}}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li v-for="item in list1" :key="item.id">{{item.title}}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li v-for="item in list2" :key="item.id">
              {{item.cate}}
              <ol>
                <li v-for="news in item.News" :key="news.id">{{news.title}}</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <!-- Session 03 End -->
    <!-- Session 04 Start -->
    <div class="Session">
      <h2>Session 04</h2>
      <p>Summary: Bind Property</p>
      <div class="Summary">
        <p>1. v-bind:title / :title</p>
        <p>2. v-html</p>
        <p>3. v-text -- another bind data</p>
        <p>4. v-bind:class / :class</p>
        <p>5. v-bind:style / :style</p>
      </div>
      <p>Content:</p>
      <div class="SessionContent">
        <p>
          1. Hover on
          <span style="color:red" :title="tooltip">This</span>
        </p>
        <p>
          2.
          <img v-bind:src="src" alt>
        </p>3.
        <div v-html="htmlContent"></div>4.
        <div v-text="msg"></div>5.
        <div :class="{'red':flag,'blue':!flag}">Bind flag</div>6.
        <ul>
          <li
            v-for="(item,key) in list"
            :key="item.id"
            :class="{'red':key==1,'blue':key==2}"
          >{{key}} --- {{item}}</li>
        </ul>7.
        <div :style="{'width':styleWidth+'px','background-color':color}">v-bind:style</div>
      </div>
    </div>
    <hr>
    <!-- Session 04 End -->
    <!-- Session 05 Start -->
    <div class="Session">
      <h2>Session 05</h2>
      <p>Summary: Two-way data binding</p>
      <div class="Summary">
        <p>1. v-model</p>
        <p>2. v-on:click bind click event</p>
        <p>3. ref -- get the dom element</p>
      </div>
      <p>Content:</p>
      <div class="SessionContent">
        <h5>{{msg}}</h5>
        <p>
          1. Two-way data binding --
          <input type="text" v-model="msg">
        </p>
        <p>
          2.
          <button v-on:click="getModel">get model value</button>
          <br>
          <button v-on:click="setModel">set model value</button>
        </p>3.
        <div style="background:red" ref="targetDiv">this is target div content.</div>
        <button v-on:click="changeColor">Change color</button>
      </div>
    </div>
    <hr>
    <!-- Session 05 End -->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      obj: { name: "Kevin", age: 18 },
      list: ["111", "222", "333"],
      list1: [
        { title: "1111" },
        { title: "222222" },
        { title: "33333" },
        { title: "4444444" }
      ],
      list2: [
        {
          cate: "Inner News",
          News: [
            { title: "InnerNews111" },
            { title: "InnerNews222" },
            { title: "InnerNews333" }
          ]
        },
        {
          cate: "Forein News",
          News: [
            { title: "ForeinNews111" },
            { title: "ForeinNews222" },
            { title: "ForeinNews333" }
          ]
        }
      ],
      tooltip: "Bind Data: Hover Title",
      src: "http://www.baidu.com/img/bd_logo1.png?where=super",
      htmlContent: "<h2>This is a h2 node</h2>",
      flag: false,
      styleWidth: 300,
      color: "red"
    };
  },
  methods: {
    getModel() {
      alert(this.msg);
    },
    setModel() {
      this.msg = "changed value";
    },
    changeColor() {
      this.$refs.targetDiv.style.background = "blue";
    }
  }
};
</script>

<style lang="scss">
.Session {
  margin-left: 30px;
}
code {
  font-size: 18px;
  color: magenta;
}
.Summary {
  font-style: italic;
  color: lightcoral;
}
.Summary p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.SessionContent {
  border: 1px solid grey;
  width: 800px;
  padding-left: 10px;
  margin-bottom: 25px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
