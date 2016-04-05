# React 代码规范

* [1 格式](#1-格式)
  * [1.1 命名](#11-命名)
  * [1.2 文件](#12-文件)
  * [1.3 引号](#13-引号)
  * [1.4 空格](#14-空格)
  * [1.5 换行](#15-换行)
  * [1.6 标签](#16-标签)
  * [1.7 属性](#17-属性)
  * [1.8 顺序](#18-顺序)
* [2 代码质量](#2-代码质量)

## 1 格式

### 1.1 命名

##### 文件使用 `.jsx` 扩展名

> 明确属于 React 组件

> 与 JS 文件区分

> 方便 IDE 的语法高亮

##### 组件文件名使用帕斯卡式，如 `ReservationCard.jsx`

##### 属性名使用驼峰式

```javascript
// bad
<Foo UserName="hello" phone_number={12345678} />

// good
<Foo userName="hello" phoneNumber={12345678} />
```

### 1.2 文件

##### 一个文件只有一个组件

> 与文件名保持一致

> 防止单个文件代码量过大，不好阅读以及管理

### 1.3 引号

##### JSX 字符串属性值使用双引号，属性值属于 js 代码的字符串使用单引号，使用。eslint: `jsx-quotes`

> 与 HTML 属性（双引号）保持一致

```javascript
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{left: "20px"}} />

// good
<Foo style={{left: '20px'}} />
```

### 1.4 空格

##### 自关闭标签前保留一个空格
```javascript
// bad
<Foo/>

// good
<Foo />
```

### 1.5 换行

##### 多行 JSX 语句使用括号包裹。eslint: `react/wrap-multilines`

```javascript
// bad
render() {
  return <MyComponent className="long body" foo="bar">
           <MyChild />
         </MyComponent>
}

// good
render() {
  return (
    <MyComponent className="long body" foo="bar">
      <MyChild />
    </MyComponent>
  )
}
```

### 1.6 标签

##### 组件没有 children 时，标签自关闭。eslint: `react/self-closing-comp`

```javascript
// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />
```

### 1.7 属性

##### 属性值为 `true` 时，省略属性值。eslint: `react/jsx-boolean-value`

```javascript
// bad
<Foo hidden={true} />

// good
<Foo hidden />
```

### 1.8 顺序

##### 组件方法

1. `getInitialState`
1. `getChildContext`
1. `componentWillMount`
1. `componentDidMount`
1. `componentWillReceiveProps`
1. `shouldComponentUpdate`
1. `componentWillUpdate`
1. `componentDidUpdate`
1. `componentWillUnmount`
1. 业务逻辑方法
1. `render`

##### `propTypes`, `defaultProps`, `contextTypes`, `childContextTypes` 声明方式

以 `propTypes` 为例

```javascript
import React, { PropTypes } from 'react';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
}

const Link = React.createClass({
  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
  }
})

Link.propTypes = propTypes

export default Link
```

## 2 代码质量



