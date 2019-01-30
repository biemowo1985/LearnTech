This project is based on the Video Training(ITYing.com - Teacher Da Di)

# Session 01 Electron简介和环境准备
    基于node.js，所以要先安装node
    需要安装、下载一些第三方包，所以要安装git

# Session 02 Electron安装和快速使用官网demo
    1. 全局安装Electron
        cnpm install -g electron
    2. 使用官网的demo
        克隆示例项目的仓库
            git clone https://github.com/electron/electron-quick-start

        进入这个仓库
            cd electron-quick-start

        安装依赖并运行
            cnpm install 
            cnpm start
    3. 通过electron-forge脚手架工具创建项目
        安装electron-forge
            cnpm install -g electron-forge
        创建项目
            electron-forge init my-app-name
        进入项目目录
            cd my-app-name
        运行项目
            npm start

# Session 03 手动创建Electron项目
    1. 新建文件夹
    2. 新建index.html和main.js文件
    3. 创建package.json元数据文件，管理项目
        npm init --yes
    4. 创建好以后，在main.js文件里面写具体代码
    5. 用electron .命令运行软件
        or 在package.json文件中配置 "start": "electron ."，实现用npm start实现软件运行

# Session 04 Electron运行流程、主进程和渲染进程
    1. 在index.html文件中引入渲染进程文件Reader.js
        <script type="text/javascript" src='Reader.js'></script>
    2. 在渲染进程文件Reader.js中，使用node.js的fs模块，读取文件内容
        var fs = require('fs');
        fs.readFile('package.json', function (err, data) {
            if (err) {
                console.log(err.message);
            }
            else {
                txtaContent.innerHTML = data;
            }
        });
