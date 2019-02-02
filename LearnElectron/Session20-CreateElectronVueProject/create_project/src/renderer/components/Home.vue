<template>
  <div id="home">
    {{msg}}
    <div>
        <button @click='sendMsg'>Send message to main</button>
        
    </div>
  </div>
</template>

<script>
  export default {
    data(){
        return{
            msg:'Home Component'
        }
    },
    methods:{
        sendMsg(){
            this.$electron.ipcRenderer.send('toMain','data from Renderer');
        }
    }
  }
</script>

<style>
  /* CSS */
</style>
