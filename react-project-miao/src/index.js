import ReactDOM from 'react-dom';
import App from './App'

// JSX的插值表达式：可以在JSX中放入JS的表达式
//【表达式指的是，一个可以产生值的代码组合，例如-运算式、变量、函数调用】

/*
  插值表达式可以接收的数据类型的值：
  基本类型：
    --string/nuber 原样输出；
    --null、undefined、bollean、symbol会被忽略；
  符合类型：
    --数组：将数组展开，依次输入；
    --ReactNode: 基于React的虚拟DOM；
  
  条件输出：
    --三目运算、或运算、且运算、函数调用；
  
  列表输出：
    --将数据映射出新数组，将数组插入结构；注意：列表输出时，每一项都需要一个唯一的key值；
*/

let data ='Hello React One!!!'
let header = <header id="header">
  <h1 id="title">hello react</h1>
  <p>React的第一节课</p>
  <nav>
    <a href=''>链接1</a>
    <a href=''>链接2</a>
  </nav>
  <div>{data}</div> 
</header>;

ReactDOM.render(
  // header,
  <App />,
  document.querySelector('#root')
)
