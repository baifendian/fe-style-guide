# JavaScript 编码规范

* [1 代码风格](#1-代码风格)
  * [1.1 结构](#11-结构)
    * [1.1.1 缩进](#111-缩进)
    * [1.1.2 换行](#112-换行)
    * [1.1.3 空格](#113-空格)
    * [1.1.4 语句](#114-语句)
    * [1.1.5 分号](#115-分号)
    * [1.1.6 引号](#116-引号)
  * [1.2 命名](#12-命名)
    * [1.2.1 格式](#121-格式)
    * [1.2.2 含义](#122-含义)
  * [1.3 注释](#13-注释)
* [2 语言特性](#2-语言特性)
  * [2.1 引用](#21-引用)
  * [2.2 类型转换](#22-类型转换)
  * [2.3 条件](#23-条件)
  * [2.4 循环](#24-循环)
  * [2.5 字符串](#25-字符串)
  * [2.6 数组](#26-数组)
  * [2.7 对象](#27-对象)
  * [2.8 函数](#28-函数)
  * [2.9 面向对象](#29-面向对象)
  * [2.10 模块](#210-模块)
  * [2.11 动态特性](#211-动态特性)
* [3 浏览器环境](#3-浏览器环境)
  * [3.1 DOM](#31-dom)
* [4 附录](#4-附录)
  * [4.1 工具](#41-工具)

## 1 代码风格

### 1.1 结构

#### 1.1.1 缩进

##### 使用 2 个空格作为缩进

```javascript
// bad
function() {
    const name
}

// bad
function() {
 const name
}

// good
function() {
  const name
}
```

#### 1.1.2 换行

##### 左花括号 `{` 不要换行。
```javascript
// bad
if (condition)
{
  // ...
}

// good
if (condition) {
  // ...
}
```

##### 运算符换行时，运算符必须在新行的行首。

```javascript

// 链式调用
target
  .setPosition(300, 50)
  .moveTo(700, 500)

// 超长的三元运算
const result = thisIsAVeryVeryLongCondition
  ? resultA : resultB

// 字符串拼接
const html = '' // 此处用一个空字符串，以便整个HTML片段都在新行严格对齐
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

##### 块末以及对象的属性和方法间保留空行

```javascript
// bad
if (foo) {
  return bar
}
return baz

// good
if (foo) {
  return bar
}

return baz

// bad
const obj = {
  foo() {
  },
  bar() {
  }
}

// good
const obj = {
  foo() {
  },

  bar() {
  }
}
```

#### 1.1.3 空格

##### 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格

```javascript
// bad
const x=y+5

// good
const x = y + 5

// bad
const isValid = !! valid

// good
const isValid = !!valid
```

##### `if / for / while / switch / do / try / catch / finally` 关键字后以及 `else / {` 之前必须有一个空格。

```javascript
// bad
if(condition){
  // ...
}

// good
if (condition) {
  // ...
}

// bad
while(condition){
  // ...
}

// good
while (condition) {
  // ...
}

// bad
(function () {
})()

// good
(function() {
})()
```

##### 在对象创建时，属性中的 `:` 之后必须有空格。

```javascript
// bad
const obj = {
  a:1,
  b:2,
  c:3
}

// good
const obj = {
  a: 1,
  b: 2,
  c: 3
}
```

##### `()` 和 `[]` 内紧贴括号部分不允许有空格。

```javascript
// bad
callFunc( param1, param2, param3 )
save( this.list[ this.indexes[ i ] ] )
const arr = [ 1, 2, 3 ]
const obj = { name: 'obj' }
needIncreament && ( variable += increament )
if ( num > list.length ) {
}
while ( len-- ) {
}

// good
callFunc(param1, param2, param3)
save(this.list[this.indexes[i]])
const arr = [1, 2, 3]
const obj = {name: 'obj'}
needIncream && (variable += increament)
if (num > list.length) {
}
while (len--) {
}
```

##### 单行注释符 `//` 后跟一个空格

#### 1.1.4 语句

##### 多个声明分开，避免删除时多出的逗号

```javascript
// bad
const hangModules = [],
  missModules = [],
  visited = {}

// good
const hangModules = []
const missModules = []
const visited = {}
```

##### 将所有的 `const` 和 `let` 分组

```javascript
// bad
let i
const items = getItems()
let dragonball
const goSportsTeam = true
let len

// good
const goSportsTeam = true
const items = getItems()
let dragonball
let i
let length
```

##### 代码块

```javascript
// bad
if (condition)
  callFunc()

// good
if (condition) callFunc()

// good
if (condition) {
  callFunc()
}

// bad 
function() { return false }

// good
function() {
  return false
}

// bad
if (condition) {
  thing1()
  thing2()
}
else {
  thing3()
}

// good
if (condition) {
  thing1()
  thing2()
} else {
  thing3()
}
```

##### `IIFE` (即时执行方法) 必须在函数表达式外添加 `(`

```javascript
// bad
const task = function () {
  // ...
}()

// bad
const task = (function () {
  // ...
}())

// good
const task = (function () {
 // ...
})()
```

#### 1.1.5 分号

行末不使用分号，自执行函数前加分号

```javascript
// bad
(() => {
  // ...
})()

// good
;(() => {
  // ...
})()
```

#### 1.1.6 引号

使用单引号

```javascript
// bad
const name = "Capt. Janeway"

// good
const name = 'Capt. Janeway'
```

### 1.2 命名

#### 1.2.1 格式

##### 对象、函数和实例（驼峰式）：variableNamesLikeThis

##### 构造函数或类（帕斯卡式）：ClassNamesLikeThis

##### 文件：fileNamesLikeThis.js

##### 类文件：ClassFileNamesLikeThis.js

##### 文件夹/项目名：folder-names-like-this

##### 专有名词风格保持不变

```javascript
// bad
function insertHtml(element, html) {
  // ...
}

// good
function insertHTML(element, html) {
  // ...
}
```

##### 使用下划线 `_` 开头命名私有属性

#### 1.2.2 含义

##### 避免使用单字母等无意义的名称，命名应具有描述性

```javascript
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

##### `类名` 使用 `名词`

##### `函数名` 使用 `动宾短语`

```javascript
function getStyle(element) {
}
```

##### 存取器使用 `getVal()` 和 `setVal('hello')`

##### 布尔值，使用 `isVal` 或 `hasVal`

```javascript
const isReady = false
const hasMoreCommands = function() {
  // ...
  // return Boolean 
}
```

### 1.3 注释

##### 使用 `/** ... */` 作为多行注释，参考[JSDoc](http://usejsdoc.org/)

```javascript
// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
  // ...
  return element;
}
```

##### 在代码上一行注释，注释前留一个空行

```javascript
// bad
const active = true // is current tab

// good
// is current tab
const active = true

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this._type || 'no type'

  return type;
}

// good
function getType() {
  console.log('fetching type...')

  // set the default type to 'no type'
  const type = this._type || 'no type'

  return type
}
```

##### 使用 `// TODO:` 标注要解决的问题

> 方便自己和他人明确代码存在的问题

```javascript
class Calculator {
  constructor() {
    // TODO: total should be configurable by an options param
    this.total = 0
  }
}
```

## 2 语言特性

### 2.1 引用

##### 使用 `let` 代替 `var`

> `let` 声明的变量属于块级作用域，而 `var` 声明的变量属于函数/全局作用域

```javascript
// bad
for (var i = 0; i < 3; i++) {
  // ...
}
console.log(i) // 3

// good
for (let i = 0; i < 3; i++) {
  // ...
}
console.log(i) // i is not defined
```

##### 使用 `const` 声明常量

如果变量不需要重新分配值，全部用 `const` 声明

> `const` 声明后，无法修改引用的值，可避免被重写

> `const` 也属于块级作用域

##### 多次使用的命名空间，使用对象解构替换

```javascript
// bad
const x = obj.x
const y = obj.y
const a = arr[0]
const b = arr[2]

// good
const {x, y} = obj
const [a, ,b] = arr
```

> `let` / `const` 声明均不会带来变量提升（Hoisting）

### 2.2 类型转换

##### 转换成字符串时，使用 `String` 构造器

```javascript
// bad
const totalScore = this.reviewScore + ''

// bad
const totalScore = new String(this.reviewScore)

// good
const totalScore = String(this.reviewScore)
```

##### 转换成数字时，使用 `Number` 构造器

```javascript
// bad
const val = +inputValue

// bad
const val = new Number(inputValue)

// good
const val = Number(inputValue)
```

##### 解析成整数时，使用 `ParseInt` 

> 使用 `parseInt` 时，如果不指定进制，转换的变量以 `0` 开头（比如一些月份和天），ECMAScript 3 会当作 8 进制。

```javascript
// bad
const val = parseInt(inputValue)

// good
const val = parseInt(inputValue, 10)
```

##### 转换成 `boolean` 时，使用 `Boolean` 构造器或者 `!!variable`

```javascript
// bad
const hasAge = new Boolean(age)

// good
const hasAge = Boolean(age)

// good
const hasAge = !!age
```

### 2.3 条件

##### 使用 `===` 和 `!==` 而不是 `==` 和 `!=`

> 严格判断会检查对象的类型，避免隐式的类型转换

```javascript
0 == false // true
0 == '0' // true
0 === false // false
0 === '0' // false
```

##### 使用简写

```javascript
// bad
if (collection.length > 0) {
  // ...
}

// good
if (collection.length) {
  // ...
}
```

##### 按执行频率排列分支的顺序

##### 避免使用 `switch`

`switch` 的方式需要逐条 `case` 判断且匹配的 `case` 如果漏掉 `break`，会执行下一条 `case` （不论是否满足）或 default，直到遇到 `break` 为止。

> 使用字典对象代替，速度更快，同时避免未预料的结果。

```javascript
const cases = {
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
// bad
for (let i = 0, len = elements.length; i < len; i++) {
  const element = elements[i]
  addListener(element, 'click', function () {})
}

// good
function clicker() {
  // ...
}

for (let i = 0, len = elements.length; i < len; i++) {
  const element = elements[i]
  addListener(element, 'click', clicker)
}
```
##### 对有序集合进行遍历时，缓存 `length`
> 虽然现代浏览器都对数组长度进行了缓存，但对于一些宿主对象和老旧浏览器的数组对象，在每次 `length` 访问时会动态计算元素个数，此时缓存 `length` 能有效提高程序性能。

##### 对有序集合进行顺序无关的遍历时，使用倒序遍历，优势如下：

* 无需额外变量缓存集合长度
* 前测条件只需判断数字是否为 true，无需大小比较
* 无需运行后执行体
* 避免了数组越界

```javascript
for (let i = elements.length; i--; ) {
  const element = elements[i]
}
```
缺点是改变了遍历的顺序，不适用于对顺序有要求的逻辑。

##### 遍历对象若无需获取原型链的属性，用 `Object.keys` 和 `for` 代替 `for...in`，优势如下：

* 无需遍历原型链的属性
* 无需 `hasOwnProperty` 判断
  
```javascript
for (let keys = Object.keys(obj), i = keys.length; i--; ) {
  const key = keys[i]
  // ...
}
```

### 2.5 字符串

##### 使用字符串模版，注意是**反引号**

```javascript
const name = 'lucy'

// bad
const greetings = 'Hello ' + name

// good
const greetings = `Hello ${name}`
```

### 2.6 数组

##### 使用数组字面量 `[]` 创建新数组，除非想要创建的是指定长度的数组

```javascript
// bad
const items = new Array()

// good
const items = []
```

##### 使用扩展运算符（spread operator）`...` 复制数组

```javascript
// bad
const list = [1,2,3]
const result = list.concat()

// good
const list = [1,2,3]
const result = [...list]
```

##### 转换类数组（array-like object）成数组时，使用 `Array.from`

```javascript
const foo = document.querySelectorAll('.foo')
const nodes = Array.from(foo)
```

### 2.7 对象

##### 使用对象字面量 `{}` 创建新 `Object`

```javascript
// bad
const item = new Object()

// good
const item = {}
```

##### 对象的属性不使用关键字/保留字，只对无效属性的属性名添加引号

```javascript
// bad
const superman = {
  default: { clark: 'kent' },
  'bar': true,
  'data-blah': 5
}

// good
const superman = {
  defaults: { clark: 'kent' },
  bar: true,
  'data-blah': 5
}
```

##### 不允许修改和扩展任何原生对象和宿主对象的原型，避免干扰他人使用

```javascript
// bad
JSON.stringify = function() {
  // ...
}
```

> 如果必须重写内置方法，功能上保持一致性


##### `for...in` 遍历对象属性时, 使用 `hasOwnProperty` 过滤掉原型链中的属性

> `for...in` 会遍历包括原型链中的可枚举属性

```javascript
// good
for (let key in object) {
  if (object.hasOwnProperty(key)) {
    // ...
  }
}
```

##### 遍历对象时, 使用 `Object.keys` 过滤掉原型链中的属性

> `Object.keys` 返回的是对象自身可枚举属性集合数组

```javascript
// good
Object.keys(object).forEach(function(key) {
  // ...
})
```

##### 动态属性名使用属性名表达式

> 所有属性可在对象创建的时候一次性定义

```javascript
// bad
const prop = condition ? 'testA' : 'testB'
const item = {
  test: 0
}
item[prop] = true

// good
const prop = condition ? 'testA' : 'testB'
const item = {
  test: 0,
  [prop]: true
}
```

##### 对象方法省略 `function`

```javascript
// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  }
}

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  }
}
``` 
##### 属性简写

```javascript
const lukeSkywalker = 'Luke Skywalker'

// bad
const obj = {
  lukeSkywalker: lukeSkywalker
}

// good
const obj = {
  lukeSkywalker
}
``` 

##### 简写的属性放在前面

> 很容易识别哪些是简写属性

```javascript
const anakinSkywalker = 'Anakin Skywalker'
const lukeSkywalker = 'Luke Skywalker'

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker
}

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4
}
```

### 2.8 函数

##### 不在循环语句中声明函数

```javascript
// bad
for (let i = 0; i < len; i++) {
  function foo(i) {
    //
  }
  foo(i)
}

// good
function foo(i) {
  //
}
for (let i = 0; i < len; i++) {
  foo(i)
}
```

##### 不用使用 `arguments`，可以选择扩展运算符 `...` 替代（rest 参数）

> 使用 `...` 能表明你要传入的参数。另外 rest 参数是一个真正的数组，而 `arguments` 是一个类数组

```javascript
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
``` 

##### 直接给函数的参数指定默认值，不要使用一个变化的函数参数

> 默认值只会在参数未传入或值为 `undefined` 的情况下被使用

```javascript
// bad
function handleThings(opts) {
  opts = opts || {}
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
``` 

##### 使用函数表达式（或传递一个匿名函数），使用箭头函数

> 箭头函数体内的 `this` 对象为定义时所在的对象而不是使用时所在的对象且写法更简洁

```javascript
// bad
[1, 2, 3].map(function (x) {
  this.count += x
  return x * x
}, this)

// good
[1, 2, 3].map((x) => {
  this.count += x
  return x * x
})
``` 

##### 箭头函数如果只有一个参数，省略圆括号；如果函数体只有一行返回语句，省略花括号和 `return`

```javascript
// bad
[1, 2, 3].map((x) => {
  return x * x
})

// good
[1, 2, 3].map(x => x * x)
```

### 2.9 面向对象

##### 总是使用 class, 避免直接操作 `prototype`

> `class` 语法更符合标准面向对象结构，更简洁易读

```javascript
// bad
function Queue(contents = []) {
  this._queue = [...contents]
}
Queue.prototype.pop = function() {
  const value = this._queue[0]
  this._queue.splice(0, 1)
  return value
}

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents]
  }
  pop() {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
  }
}
```

##### 使用 `extends` 继承

```javascript
// bad
const inherits = require('inherits')
function PeekableQueue(contents) {
  Queue.apply(this, contents)
}
inherits(PeekableQueue, Queue)
PeekableQueue.prototype.peek = function() {
  return this._queue[0]
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0]
  }
} 
```

### 2.10 模块

##### 使用模组 (`import` / `export`) 而不是其他非标准模块系统

```javascript
// bad
const styleGuide = require('./styleGuide')

// good
import styleGuide from './styleGuide'
```

### 2.11 动态特性

##### 避免使用直接 `eval` 函数

> 动态代码如果通过其他来源传入 `eval('document.' + potato + '.style.color = "red"')`，可能导致注入攻击

> 动态代码调试起来不方便，如具体的行数不明

> 动态代码执行更慢（不能编译、缓存）

> `eval` 直接调用时，作用域为当前作用域，间接调用时，作用域为全局作用域，可能会造成干扰

##### 如果一定要执行动态代码，使用 `new Function` 执行

> `new Function` 相当于在全局作用域下声明一个函数，不会干扰其他作用域

##### 使用函数代替动态代码

> 动态代码的执行作用域是全局的，会影响全局作用域

```javascript
// bad
setTimeout('a++', 0)
// 与HTML上直接定义事件相同
element.setAttribute('onclick', 'doSomething()')

// good
setTimeout(function() {
  a++
}, 0)
element.addEventListener('click', function() { ... }, false)
```

##### 尽量不要使用 `with`。

> `with` 作用域下如果没找到，会向父级寻找，可能造成未预料的结果。


## 3 浏览器环境

### 3.1 DOM

##### 尽量减少 DOM 操作。

> 使用变量缓存 DOM 对象。

```javascript
// bad
document.getElementById('container').setAttribute('class', 'active')
document.getElementById('container').setAttribute('index', 0)

// good
const el = document.getElementById('container')
el.setAttribute('class', 'active')
el.setAttribute('index', 0)
```

##### 操作 DOM 时，尽量减少页面 reflow

页面 reflow 是非常耗时的行为，非常容易导致性能瓶颈。下面一些场景会触发浏览器的reflow：

* DOM 元素的添加、修改（内容）、删除
* 应用新的样式或者修改任何影响元素布局的属性
* Resize 浏览器窗口、滚动页面
* 读取元素的某些属性，如`offsetLeft`、`offsetTop`、`offsetHeight`、`offsetWidth`、`scrollTop/Left/Width/Height`、`clientTop/Left/Width/Height`、`getComputedStyle()`、`currentStyle`(IE)

```javascript
// bad
el.style.width = '100px'
el.style.height = '100px'
while (i--) {
  el.style.left = el.offsetWidth + 10 + 'px'
}

// good
el.style.cssText = 'width: 100px; height: 100px;'
const offsetWidth = el.offsetWidth
while (i--) {
  el.style.left = offsetWidth + 10 + 'px'
}
```

操作 document fragment 是在内存中操作而非 DOM 树下，不会导致 reflow

```javascript
// bad
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li')
  docFrag.appendChild(li)
}

// good
const docFrag = document.createDocumentFragment()
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li')
  docFrag.appendChild(li)
}
ul.appendChild(docFrag)
```

##### 获取子元素使用 `children`，避免使用 `childNodes`，除非子元素包含文本、注释和属性类型的节点。

##### 优先使用 `addEventListener / attachEvent` 绑定事件，避免直接在 HTML 属性中或 DOM 的属性绑定事件

> `addEventListener / attachEvent` 可绑定多个事件

> 直接在 HTML 属性中或 DOM 的属性绑定事件属于动态代码，在全局作用域下执行

## 4 附录

### 4.1 工具

代码规范检查

* [ESlint](http://eslint.org/)
* [JSHint](http://www.jshint.com/)