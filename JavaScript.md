# JavaScript 编码规范

* [1 代码风格](#1-代码风格)
  * [1.1 结构](#11-结构)
    * [1.1.1 缩进](#111-缩进)
    * [1.1.2 换行](#112-换行)
    * [1.1.3 空格](#113-空格)
    * [1.1.4 语句](#114-语句)
  * [1.2 命名](#12-命名)
    * [1.2.1 格式](#121-格式)
    * [1.2.2 含义](#122-含义)
  * [1.3 注释](#13-注释)
* [2 语言特性](#2-语言特性)
  * [2.1 变量](#21-变量)
  * [2.2 类型转换](#22-类型转换)
  * [2.3 条件](#23-条件)
  * [2.4 循环](#24-循环)
  * [2.5 字符串](#25-字符串)
  * [2.6 对象](#26-对象)
  * [2.7 数组](#27-数组)
  * [2.8 动态特性](#28-动态特性)
* [3 浏览器环境](#3-浏览器环境)
  * [3.1 DOM](#31-DOM)

## 1 代码风格

### 1.1 结构

#### 1.1.1 缩进

##### 使用 `2` 个空格做为一个缩进层级

#### 1.1.2 换行

##### `{` 不要换行。
```javascript
// good
if (condition) {
}

// bad
if (condition)
{
}
```

##### 每条语句结束后必须换行。

##### 运算符换行时，运算符必须在新行的行首。

```javascript

// 链式调用
target
  .setPosition(300, 50)
  .moveTo(700, 500)

// 超长的三元运算
var result = thisIsAVeryVeryLongCondition
  ? resultA : resultB

// 字符串拼接
var html = '' // 此处用一个空字符串，以便整个HTML片段都在新行严格对齐
  + '<article>'
  +   '<h1>Title here</h1>'
  +   '<p>This is a paragraph</p>'
  +   '<footer>Complete</footer>'
  + '</article>'
```
##### 不同行为或逻辑的语句集，使用空行隔开，更易阅读。

```javascript
function setStyle(element, property, value) {
  if (element == null) {
      return
  }

  element.style[property] = value
}
```

#### 1.1.3 空格

##### 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。

```javascript
var a = !arr.length
a++
a = b + c
```
##### 关键字后以及 `{` 前必须有一个空格。

```javascript
// good
if (condition) {
}

while (condition) {
}

(function () {
})();

// bad
if(condition){
}

while(condition){
}

(function(){
})();
```

##### 在对象创建时，属性中的 `:` 之后必须有空格。

```javascript
// good
var obj = {
    a: 1,
    b: 2,
    c: 3
};

// bad
var obj = {
    a:1,
    b:2,
    c:3
};
```

##### `()` 和 `[]` 内紧贴括号部分不允许有空格。

```javascript
// good

callFunc(param1, param2, param3)

save(this.list[this.indexes[i]])

var arr = [1, 2, 3]

var obj = {name: 'obj'}

needIncream && (variable += increament)

if (num > list.length) {
}

while (len--) {
}


// bad

callFunc( param1, param2, param3 )

save( this.list[ this.indexes[ i ] ] )

var arr = [ 1, 2, 3 ]

var obj = { name: 'obj' }

needIncreament && ( variable += increament )

if ( num > list.length ) {
}

while ( len-- ) {
}
```

#### 1.1.4 语句

##### 在 `if / else / for / do / while` 语句中，即使只有一行，也不得省略块 `{...}`。

```javascript
// good
if (condition) {
  callFunc()
}

// bad
if (condition) callFunc()
if (condition)
  callFunc()
```

##### `IIFE` (即时执行方法) 必须在函数表达式外添加 `(`。

```javascript
// good
var task = (function () {
 // ...
})()

// bad
var task = function () {
  // ...
}()

var task = (function () {
  // ...
}())
```

### 1.2 命名

#### 1.2.1 格式

##### `变量` variableNamesLikeThis

##### `常量` CONSTANT_VALUES_LIKE_THIS

##### `函数` functionNamesLikeThis

##### `类` ClassNamesLikeThis

##### `文件` fileNamesLikeThis.js

##### `类文件` ClassFileNamesLikeThis.js

##### `文件夹` folder-names-like-this

##### 专有名词风格保持不变

```javascript
function insertHTML(element, html) {
}

var httpRequest = new HTTPRequest()
```

#### 1.2.2 含义

##### `类名` 使用 `名词`

##### `函数名` 使用 `动宾短语`

```javascript
function getStyle(element) {
}
```

##### `boolean` 类型的变量使用 `is` 或 `has` 开头

```javascript
var isReady = false
var hasMoreCommands = false
```

### 1.3 注释

##### 在代码上一行注释，不要在行尾甚至行末。

##### 单行注释符 `//` 后跟一个空格

##### 非文档化的注释只用单行注释，有多行注释内容时，使用多个单行注释。

##### 文档化的注释采用 `/**...*/` 的形式。

```javascript
/**
 * test description
 */
function test() {
}
```

## 2 语言特性

### 2.1 变量

##### 减少使用全局变量。

所有的 JavaScript 代码共享一个命名空间（浏览器环境下的 window, NodeJS环境下的 global）, 所有的全局变量直接属于这个命名空间，所以过多的全局变量可能会引起冲突，尤其是他人的代码。

##### 变量在使用前必须通过 `var` 定义，强烈建议使用 `use strict` 来避免手误出现的全局变量。

##### 多个变量分别声明，避免删除时多出的逗号。

```javascript
// good
var hangModules = []
var missModules = []
var visited = {}

// bad
var hangModules = [],
  missModules = [],
  visited = {}
```

### 2.2 类型转换

##### 转换成 `string` 时，使用 `variable + ''`。

##### 转换成 `number` 时，使用 `+variable`。

##### 使用 `parseInt` 时，必须指定进制，否则的话如果要转换的变量以 `0` 开头，不同的浏览器可能认为是不同的进制。

##### 转换成 `boolean` 时，使用 `!!variable`。

### 2.3 条件

##### 使用 `===` 判断是否相等，避免隐式的类型转换。

##### 按执行频率排列分支的顺序。

##### 避免使用 `switch`。

`switch` 的方式需要逐条 `case` 判断且匹配的 `case` 如果漏掉 `break`，会执行下一条 `case` （不论是否满足）或 default，直到遇到 `break` 为止。

使用字典对象代替，速度更快，同时避免未预料的结果。

```javascript
var cases = {
  alpha: function() {
    // ...
  },
  beta: function() {
    // ...
  },
  _default: function() {
    // ...
  }
}
```

### 2.4 循环

##### 循环体不要包含函数表达式，事先将函数提取到循环体外，避免多次生成函数对象。

```javascript
// good
function clicker() {
  // ...
}

for (var i = 0, len = elements.length; i < len; i++) {
  var element = elements[i]
  addListener(element, 'click', clicker)
}

// bad
for (var i = 0, len = elements.length; i < len; i++) {
  var element = elements[i]
  addListener(element, 'click', function () {})
}
```
##### 对有序集合进行遍历时，缓存 `length`。虽然现代浏览器都对数组长度进行了缓存，但对于一些宿主对象和老旧浏览器的数组对象，在每次 length 访问时会动态计算元素个数，此时缓存 length 能有效提高程序性能。

##### 对有序集合进行顺序无关的遍历时，使用倒序遍历，优势如下：

* 无需额外变量缓存集合长度
* 前测条件只需判断数字是否为 true，无需大小比较
* 无需运行后执行体
* 避免了数组越界

```javascript
for (var i = elements.length; i--; ) {
  var element = elements[i]
}
```
缺点是改变了遍历的顺序，不适用于对顺序有要求的逻辑。

##### 遍历对象若无需获取原型链的属性，用 `Object.keys` 和 `for` 代替 `for...in`，优势如下：

* 无需遍历原型链的属性
* 无需 `hasOwnProperty` 判断
  
```javascript
for (var keys = Object.keys(obj), i = keys.length; i--; ) {
  var key = keys[i]
  // ...
}
```

### 2.5 字符串

##### 字符串使用单引号。

### 2.6 对象

##### 使用对象字面量 `{}` 创建新 `Object`。

##### 对象的属性不使用关键字，不添加引号。

##### 不允许修改和扩展任何原生对象和宿主对象的原型，避免干扰他人使用。

##### `for...in` 遍历对象时, 使用 `hasOwnProperty` 过滤掉原型中的属性。

### 2.7 数组

##### 使用数组字面量 `[]` 创建新数组，除非想要创建的是指定长度的数组。

### 2.8 动态特性

##### 避免使用直接 `eval` 函数。直接调用时，作用域为当前作用域，可能会造成干扰。

##### 使用 `new Function` 执行动态代码。

通过 new Function 生成的函数作用域是全局使用域，不会影响当前的作用域。

##### 使用函数代替动态代码。

动态代码的执行是全局的，会要求使用或影响全局作用域。

```javascript
// good
setTimeout(function() {
  a++
}, 0)

element.addEventListener('click', function() { ... }, false)

// bad
setTimeout('a++', 0)

// 与HTML上直接定义事件相同
element.setAttribute('onclick', 'doSomething()')
```

##### 尽量不要使用 `with`。

with 作用域下如果没找到，会向父级寻找，可能造成未预料的结果。


## 3 浏览器环境

### 3.1 DOM

##### 尽量减少 `DOM` 操作。

* 使用变量缓存 DOM 对象。
* 循环添加节点时，使用 `document.createDocumentFragment` 存储，再一次性添加。


##### 操作 `DOM` 时，尽量减少页面 `reflow`。

页面 reflow 是非常耗时的行为，非常容易导致性能瓶颈。下面一些场景会触发浏览器的reflow：

* DOM 元素的添加、修改（内容）、删除。
* 应用新的样式或者修改任何影响元素布局的属性。
* Resize 浏览器窗口、滚动页面。
* 读取元素的某些属性（offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()、currentStyle(in IE)) 。

所以为了减少页面 `reflow`，应将所有要处理的结果缓存到一起，再一次性操作。

##### 获取子元素使用 `children`，避免使用 `childNodes`，除非子元素包含文本、注释和属性类型的节点。

##### 优先使用 `addEventListener / attachEvent` 绑定事件，避免直接在 HTML 属性中或 DOM 的属性绑定事件。

`addEventListener / attachEvent` 可绑定多个事件。