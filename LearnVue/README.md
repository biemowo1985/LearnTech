# Session07 TodoList
    Javascript 数组 -- push方法：向数组中添加记录
                    -- splice方法：从数组中删除记录


# Session08 TodoList
    v-if 语法 -- 控制dom元素的存在与删除

# Session09 localStorage及将localStorage相关操作封装到独立的js文件中
    1. 封装方法详见module/storage.js文件
    2. mounted函数 -- 生命周期函数 vue页面刷新（加载）就会调用的方法，类似构造函数


# Session10 VUE中的组件
    1. 组件用法：
        a. 创建.vue文件，即为创建一个组件
        b. 在App.vue文件中导入组件 - import [ComponentName] from "ComponentPath"
        c. 在App.vue文件的js部分挂载组件 - 即在与data同级的components属性中，添加一个Component对象，格式为{"ComponentNode": ComponentName}
        d. 在template标签中使用组件 - 用法与html标签类似
