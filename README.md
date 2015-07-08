# 前端编码风格约定参考指引 (讨论稿)

注：本约定仅针对普遍的情形，其目的是为了减少代码冲突和耦合，提高可读性，降低维护成本。

## 通用

### 缩进

缩进均使用空格，每个缩进为四个空格

### 注释

对于难以理解、需要改进、有bug、容易引起混淆的代码、针对浏览器特性的hack，或者可能会被认为是错误的代码，需要添加注释。

注释可以采用单行或多行，放置在被注释的代码之前，且不与代码写在同一行

## CSS

- 除了UI组件以外，不使用class堆积和语义为描述样式本身的class（可保留**clearfix**与**hide**）
- 使用autoprefixer来自动处理CSS3属性的浏览器前缀
- CSS属性名按照位置、盒模型、文字、背景的顺序书写
- 减少CSS嵌套
- 类名和id均使用小写，以-连接

## HTML

HTML元素的嵌套关系为Layout > Module > UI

### Layout

用于布局的元素在页面上具有唯一性，所以可以使用ID来命名，如**#header #footer #nav #sidebar**

### Module

将页面中功能性质的元素拆分成互相独立的模块，模块的class以**module-** 为前缀

模块内部使用短命名，如**title** **operator** 不使用**module-news-list**这样的长命名

除了确定作为公用模块的module，命名上应保留独立性

公用模块中其中某个实例如需临时添加特殊样式（如节日背景、临时推荐），可使用模块ID覆写，否则将其转成独立模块

模块之间不互相嵌套，避免CSS冲突。

### UI Components

UI组件class以**ui-** 为前缀

UI组件可以互相嵌套，如**ui-dialog** > **ui-operatortip** > **ui-icon**

UI组件可以使用class堆叠，但是仍应尽量使用有实际意义的命名

内部使用长命名，如**ui-dialog-title**，保持样式的独立性，避免受到外部样式（如module，其它UI等）的污染

标准UI库由产品、设计和前端共同制定并存档，后续的产品设计和开发都根据该标准来执行

### 其它

用于JS调用的HTML元素，在添加类名或ID时使用**J_** 前缀加首字母小写的驼峰式命名

自定义HTML属性，以**data-** 为前缀

## Javascript

### 变量命名风格

- 对于变量，使用首字母小写的驼峰式风格
- 对于需要传递到后端的参数，使用小写字母加下划线连接的风格
- 对于构造器函数，使用首字母大写的驼峰式风格
- 对于常量，使用全大写字母加下划线连接

### 编码规范

对于JAVASCRIPT的编码规范，可以综合参考如下资料：

- [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
- [Javascript: The Good Parts by Douglas Crockford](http://book.douban.com/subject/11874748/)
- [Maintainable Javascript: Writing Readable Code by Nicholas C. Zakas](http://book.douban.com/subject/21792530/)

#### 部分约定参考

使用严格模式

给变量、函数或属性、方法命名时，不使用JS保留词和覆盖JS原生的属性、方法

避免使用全局变量，缩小变量的作用域范围，必须使用全局变量，则使用命名空间

函数内部的变量在函数的开始合并var声明，声明的顺序是先写声明即赋值的变量，再写暂不赋值的变量

函数和变量在被使用之前应该已经被声明

当前函数内的变量不重复声明，如 ```var a = 1; var a;``` 或者```function a (b) {var b = b + '***';}```

除非有必要，否则使用单引号（因为HTML的属性为双引号）

语句的结尾要加分号

代码块都用花括号包围，如不写作```if (!a) return false;``` 需写作```if (!a) {return false;}```

花括号的 **{** 直接跟在前面代码的后面，之后换行，而 **}** 前也需要换行 （```} else {``` 之类除外）

运算符和括号外部都留空格，括号内部不需要留空格（运行函数/方法，或者分号、逗号前除外，如```doSomething();```）

不使用**==** / **!=**，而使用**===** / **!==**

严禁使用with语句

条件语句和循环语句中，严禁定义函数

立即调用的函数用圆括号包含

如非不得已，避免**eval()** 或者**new Function()** 来执行JS，如果需要使用**eval()**，则不在其中创建新的变量或者函数

避免使用易于混淆和误解的代码，如**a++** **++a**运算，以**_**开头的变量名等等

对于容易产生错误和异常的代码需要进行检测或者对异常进行处理

检测变量/对象的类型而不仅检测其是否为空

通过JSLINT或JSHINT工具校验所编写的代码

### 模块风格

遵循以上风格约定的前提下，在开发组件/插件时，如果使用框架或者类库，遵循框架/类库所约定的形式。如果没有的话，则使用如下形式：

    define(function () {
        funtion Cons(option) {
            // 初始化
            this.initialize();
        }

        Cons.prototype = {
            // 初始化
            initialize: {
            }
        };

        return Cons;
    });

对于组件、插件，使用JSDOC风格的注释模版

    /*
     * @description [模块简介]
     * @param  {[type]} ParameterName = [value1|value2...] [description]
     * @return {[type]}     [description]
     * @example 
     * [代码示例]
     */