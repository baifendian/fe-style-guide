# JavaScript 编码规范

***

## 目录

 * [命名](#命名)
 * [不要重写或扩展内置对象](#不要重写或扩展内置对象)
 * [代码格式](#代码格式)
 * [避免使用switch](#避免使用switch)
 * [测试](#测试)
 * [其他](#其他)

------------------------------------------------

## 命名

* 变量: variableNamesLikeThis
* 常量: CONSTANT_VALUES_LIKE_THIS
* 函数: functionNamesLikeThis
* 类: ClassNamesLikeThis
* 文件: fileNamesLikeThis.js
* 类文件: ClassFileNamesLikeThis.js
* 文件夹: folder-names-like-this

```javascript
// Bad
function q() {} // What is the fuck?
```


## 不要重写或扩展内置对象

如果是项目中包含其他人的代码，重写或扩展内置对象可能会带来冲突

```javascript
// Bad
JSON.stringify = function() { 
  // ...
}
```

## 代码格式

* **缩进：2个空格，不用 tab 或者其他数量的空格（这个在团队开发时尤其重要）**

* 花括号

  ```javascript
  // Good
  function test() {
    // ...
  }
  
  if (condition) {
    doSomething()
  }

  for (var i = 0; i < 100; i++) {
    doSomething()
  }

  // Bad
  function test()
  {
    // ...
  }

  if (condition) doSomething()

  for (var i = 0; i < 100; i++) doSomething()
  ```
* 空行：换行可以把代码分组，更利于阅读，例如

  ```javascript
  doSomethingTo(x)
  doSomethingElseTo(x)
  andThen(x)

  nowDoSomethingWith(y)

  andNowWith(z)
  ```
* 过长的表达式（大于80个字符）

  ```javascript
  var a = longCondition ?
          doSomethingA() : doSomethingB()

  var x = foo.bar().
          doSomething().
          doSomethingElse()
  ```
* 字符串：字符串一律用单引号
  
  ```javascript
  var msg = 'This is some HTML'
  ```
* 注释
  
  * 单行/多行注释放于代码上方
  * 其他参考 [JSDoc](http://usejsdoc.org/)


## 避免使用switch

```javascript
// 使用字典对象代替
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

var expression = 'alpha'
cases[cases[expression] ? expression : '_default']()
```

## 测试
  
  待补充


## 其他

* 行末的分号建议不写（不写分号时注意以方/圆括号开始的要前置分号）

  ```javascript
  ;['push', 'splice'].forEach(function() {
    // ...
  })
  ```
* 不管采用什么规范，整个项目代码要一致