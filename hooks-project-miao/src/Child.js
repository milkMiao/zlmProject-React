// import { Component } from 'react';

//类组件--写法
// class Child extends Component { 
//     render(){
//         return <>
//             <h1>Child</h1>
//         </>
//     }
// }

//函数式组件--写法
function Child({count, addCount}) {//props
    // console.log("props-----", props)
    // 使用函数式组件时，应该尽量减少函数中--子组件的声明，否则--组件每次更新时都会--重新创建这个函数；
    console.log("render-------") 
    return <>
        <h1>Child</h1>
        <div>count: {count}</div>
        <button onClick={addCount}>AddCount</button>
    </>
}
export default Child;