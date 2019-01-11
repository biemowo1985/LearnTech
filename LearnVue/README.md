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
