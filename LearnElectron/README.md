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
        
