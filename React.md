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
  * [2.1 Thinking in React](#21-thinking-in-react)
  * [2.2 属性验证](#22-属性验证)
  * [2.3 无状态组件](#23-无状态组件)
  * [2.4 shouldComponentUpdate 优先性能](#24-shouldcomponentupdate-优先性能)
  * [2.5 render 性能优化](#25-render-性能优化)
  * [2.6 避免滥用 shouldComponentUpdate](#26-避免滥用-shouldcomponentupdate)
* [3 附录](#3-附录)
  * [3.1 参考](#31-参考)
  * [3.2 工具](#32-工具)

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

## 2 React 特性

### 2.1 Thinking in React

##### 避免不必要的 DOM 操作

场景：获取当前点击的 ID

```javascript
// bad (JS 和 DOM 之间的通信耗费的资源比较大，既要给元素写数据，又要从元素中读取数据)
const App = React.createClass({

  getInitialState: {
    return {
      items: [{id: 1, name: 'one'}, {id: 2, name: 'two'}]
    }
  },

  handleClick(e) {
    console.log(e.target.getAttribute('data-id'))
  },

  render() {
    return (
      <ul>
        {this.state.items.map(item => {
          return <li key={item.id} data-id={item.id} onClick={this.handleClick}>{item.name}</li>
        })}
      </ul>
    )
  }
})

// good (利用闭包的特性，避免了和 DOM 通信的过程)
const App = React.createClass({

  getInitialState: {
    return {
      items: [{id: 1, name: 'one'}, {id: 2, name: 'two'}]
    }
  },

  handleClick(i) {
    console.log(this.state.items[i].id)
  },

  render() {
    return (
      <ul>
        {this.state.items.map((item, i) => {
          return <li key={item.id} onClick={this.handleClick.bind(this, i)}>{item.name}</li>
        })}
      </ul>
    )
  }
})
```

### 2.2 属性验证

完整的属性验证既能检查外部传入的数据（不可控因素），减少出错后查找 bug 所耗费的时间，又能让人一目了然了解组件所有对外的接口

```javascript
// good
import React, { PropTypes } from 'react'

const propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.fun
}

const Comments = React.createClass({
  // ...
})

Comments.propTypes = propTypes
```

### 2.3 无状态组件

##### 优先使用函无状态函数式组件（Stateless function components）

React 从0.14开始引入无状态组件，很多场景组件只关心输入和输出，传入不同的属性，返回不同的 DOM 结构。

> This pattern is designed to encourage the creation of these simple components that should comprise large portions of your apps. In the future, we’ll also be able to make performance optimizations specific to these components by avoiding unnecessary checks and memory allocations.

```javascript
// bad
const Listing = React.createClass({
  render() {
    return <div>{this.props.id}</div>
  }
})

// bad (since arrow functions do not have a "name" property)
const Listing = ({ id }) => (
  <div>{id}</div>
)

// good
function Listing({ id }) {
  return <div>{id}</div>;
}
```

那么无状态组件属性验证如何写？

```javascript
const propTypes = {
  id: PropTypes.number.isRequired,
}

function Listing({ id }) {
  return <div>{id}</div>;
}

Listing.propTypes = propTypes
```

### 2.4 shouldComponentUpdate 优先性能

##### 使用 `shouldComponentUpdate` 减少不必要的 `render` 计算

`shouldComponentUpdate` 方法在 `render` 前执行，返回 `false` 后不再执行 `render`。所以可判断新旧状态或属性来决定是否执行 `render`

```javascript
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.id !== this.props.id
}
```

### 2.5 render 性能优化

##### 耗时的计算（如大数据遍历）封装成组件，组件内部利用 `shouldComponentUpdate` 判断是否渲染

```javascript
// 假如 list 的数量是 10000

// bad
const App = React.createClass({
  render() {
    return (
      <h1>Data List: {this.state.name}</h1>
      <ul>{this.state.list.map(item => <li>{item.id}</li>)}</ul>
    )
  }
})

// good
const List = React.createClass({

  shouldComponentUpdate(nextProps) {
    return nextProps.list !== this.props.list
  },

  render() {
    return (
      <ul>{this.props.list.map(item => <li>{item.id}</li>)}</ul>
    )
  }
})

const App = React.createClass({
  render() {
    return (
      <h1>Data List: {this.state.name}</h1>
      <List list={this.state.list}></List>
    )
  }
})
```

### 2.6 避免滥用 shouldComponentUpdate

如果组件支持 `children`，避免使用 `shouldComponentUpdate`，否则组件未执行 `render` 时，`children` 的状态无法更新

```javascript
// bad
const Wrap = React.createClass({
  
  shouldComponentUpdate() {
    // ...
    return false
  },

  render() {
    return <div>{this.props.children}</div>
  }
})

const App = React.createClass({
  render() {
    return (
      <Wrap>
        <h1>{this.state.title}</h1>
      </Wrap>
    )
  }
})
```


## 3 附录

### 3.1 参考

* [Airbnb React Style](https://github.com/airbnb/javascript/tree/master/react)

### 3.2 工具

代码规范检查

* [ESlint](http://eslint.org/) + [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)