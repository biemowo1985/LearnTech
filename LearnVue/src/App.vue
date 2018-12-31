<template>
  <div id="app">
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
    <!-- Session 02 End -->
    <hr>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
.SessionContent {
  border: 1px solid grey;
  width: 800px;
  padding-left: 10px;
  margin-bottom: 25px;
}
</style>
