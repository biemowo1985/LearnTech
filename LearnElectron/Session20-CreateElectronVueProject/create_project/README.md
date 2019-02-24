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
   1. 单独隐藏顶部菜单
      mainWindow.setMenu(null);
   2. 隐藏系统默认的关闭按钮，最大化、最小化按钮
      在BrowserWindow实例里面，设置属性 frame: false即可实现
   3. 自定义关闭，最大化，最小化按钮
      <1. 先在按钮处定义点击动作函数
         @click="btnMinimize"
         btnMinimize() {
            this.$electron.ipcRenderer.send("window-min");
         }
      <2. 在主进程中监听渲染进程广播的数据
         ipcMain.on('window-min', () => {
            mainWindow.minimize();
         });
   4. 定义可拖拽
         可拖拽的 css:
         -webkit-app-region: drag;
         不可拖拽的 css:
         -webkit-app-region: no-drag;

# Session24 Electron+Vue中操作Nedb数据库
	1、安装nedb数据库
		cnpm install nedb --save

	2、新建一个src/renderer/datastore.js
		import Datastore from 'nedb'
		import path from 'path'
		import { remote } from 'electron'

		export default new Datastore({
  			autoload: true,
  			filename: path.join(remote.app.getPath('userData'), '/data.db')
		})

	3、src/renderer/main.js
		import db from './datastore.js'
		Vue.prototype.$db = db

	4、在vue的组件里面实现数据的增加 修改 删除 显示
		this.$db.insert({},function(){
			
		})

		this.$db.find({},function(){
			//获取查询的数据
		})

		this.$db.update({条件},{$set:{更改的数据}},function(){
			
		})

		this.$db.remove({条件},{},function(){
			
		})