# Session20 Electron+Vue项目安装、搭建
    1. 环境安装
       a. 全局安装Vue脚手架工具 cnpm install -g vue-cli
       b. 全局安装Electron  cnpm install -g electron
    
    2. 用Vue脚手架工具创建项目   
       vue init simulatedgreg/electron-vue [my-project]
    
    3. 安装项目依赖
       cnpm install
    
# Session21 Electron+Vue主进程与渲染进程通信
   1. 主进程与渲染进程通信
      //渲染进程给主进程广播数据
         this.$electron.ipcRenderer.send("toMain", "data from Renderer");
      //在main文件夹中添加ipcMain.js文件，并在其中写主进程的相关操作
      //在index.js文件的createWindow方法中引入ipcMain.js文件
         require('./ipcMain')
   2. 阻止浏览器默认行为
      @click.prevent="openUrl($event)" 或者 @click="openUrl($event)"并在openUrl方法中调用e.preventDefault()均可

# Session22 Electron+Vue中ElementUi的使用、electron-vue 中使用sass
   尝试使用

# Session23 Electron+Vue中隐藏顶部菜单 隐藏关闭按钮、自定义关闭 最大化 最小化按钮
