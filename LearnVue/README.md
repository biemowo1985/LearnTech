# Session07 TodoList
    Javascript 数组 -- push方法：向数组中添加记录
                    -- splice方法：从数组中删除记录


# Session08 TodoList
    v-if 语法 -- 控制dom元素的存在与删除

# Session09 localStorage及将localStorage相关操作封装到独立的js文件中
    1. 封装方法详见module/storage.js文件
        在要使用的vue组件中加入对该js文件的引用
        import [Name] from "../module/storage.js";
    2. mounted函数 -- 生命周期函数 vue页面刷新（加载）就会调用的方法，类似构造函数


# Session10 VUE中的组件
    1. 组件用法：
        a. 创建.vue文件，即为创建一个组件
        b. 在App.vue文件中导入组件 - import [ComponentName] from "ComponentPath"
        c. 在App.vue文件的js部分挂载组件 - 即在与data同级的components属性中，添加一个Component对象，格式为{"ComponentNode": ComponentName}
        d. 在template标签中使用组件 - 用法与html标签类似

# Session11 VUE中的生命周期函数，（总共8个函数，参考Vue官网的[生命周期图示]）
    

# Session12 VUE中的请求数据模块
    1. 官方提供的vue-resource插件，使用npm install安装，记得加上--save参数，表示将该插件写入package.json文件中
        a. 插件安装：npm install 插件名 --save
        b. 在main.js文件中，import该插件：import 插件 from "插件Name"
        c. 在main.js文件中，Vue.use(插件)

# Session13 VUE中的第三方请求数据插件axios
    1. 用法可以查看axios的官方文档，简单

# Session14 父子组件传值
    1. 父组件给子组件传值(分两步)
        a. 在父组件对子组件的调用位置，加上一个属性，并给属性赋值
            <v-header :HeaderData='headData'></v-header>
        b. 子组件的script中添加与data/methods同级的属性props，里面的值与父组件属性名保持一致
            props:['HeaderData']
        
        note: 还可以传父组件中的函数或者父组件整个对象, 详见home & header组件代码

# Session15 父子组件主动获取对方的数据和方法
    1. 父组件主动获取子组件的数据和方法
        a. 调用子组件的时候，定义一个ref
            <v-header ref='header'></v-header>
        b. 在父组件里通过
            this.$refs.header.属性
            this.$refs.header.方法
    2. 子组件主动获取父组件的数据和方法
        this.$parent.属性
        this.$parent.方法

# Session17 Vue路由
    1. 使用Vue路由的步骤：
        a. 安装vue-router,  cnpm install vue-router --save
        b. 在main.js文件中引入vue-router, 并用Vue.use(VueRouter)来使用
            import VueRouter from 'vue-router';
            Vue.use(VueRouter);
        c. 在main.js文件中创建组件
            import Home from './Components/Home.vue';
            import Header from './Components/Header.vue';
        d. 配置路由
            const routes = [
                { path: '/home', component: Home },
                { path: '/header', component: Header }
            ];
        e. 实例化VueRouter
            const router=new VueRouter({
                routes
            });
        f. 挂载路由
            new Vue({
                el: '#Home',
                router,
                render: h => h(Home)
            });
        g. 动态加载的路由放在根组件App.vue的模版里目标位置
            <router-link to="/home">Home</router-link>  路由链接
            <router-link to="/header">Header</router-link>  路由链接
            <router-view></router-view>     *** 重点，放在根组件App.vue的模板目标位置


# Session18 Vue动态路由，传值
    1. 动态路由传值
        a. 配置动态路由
            import Details from './Components/Details.vue';
            { path: '/details/:id', component: Details },

            notes: 动态路径参数以冒号开头

        b. 配置请求路由链接
            <li v-for="(item,key) in newsList" :key='key'>
                <router-link :to="'/details/'+key">{{key}} -- {{item}}</router-link>
            </li>
        c. 在对应的详情页面，获取动态路由的值
            this.$route.params

    2. Get传值
        与动态路由传值的区别：
        a. <router-link :to="'/prodetails?pid='+key">{{key}} -- {{item}}</router-link>
        b. this.$route.query
        其他相同




# Session24 Vue UI 框架 -- Element UI的使用
    1. 使用方法
        a. 安装该框架
            cnpm i element-ui -s
        b. 引入ElementUI组件和css文件
            import ElementUI from 'element-ui';
            import 'element-ui/lib/theme-chalk/index.css';
            Vue.use(ElementUI);
        c. 配置file_loader, 因为ElementUI组件里面有字体文件
            将以下内容放到webpack.config.js文件的 module -> rules节点底下
            {
                test: /\.(eot|svf|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }