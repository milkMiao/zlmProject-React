import { Component } from 'react';
import Child from "./Child";

/*
  1、函数式组件，本质上就是一个常规函数，接收一个参数props，
  在函数的 return 定义，该组件要输出的视图；
  如下： App(){...} 就是一个函数组件

  2、函数式组件中没有this，和生命周期

  3、使用函数式组件时，应该尽量减少函数中--子组件的声明，否则--组件每次更新时都会--重新创建这个函数；
*/

// function App() {
//   return (
//     <>
//       <h1>Hello React ~</h1>
//       <Child />
//     </>
//   );
// }

//类组件写法
class App extends Component {
  state = {
    count: 1
  }
  addCount = () => {
     this.setState({
        count: this.state.count +1
     })
  }
  render() {
    const {count} = this.state;
    return <>
      <Child count={count} addCount={this.addCount}  info="传递信息" />
    </>
  }
}

export default App;
