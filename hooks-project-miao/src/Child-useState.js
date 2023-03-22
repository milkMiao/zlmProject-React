// import { Component } from 'react';
import { useState } from 'react';

//类组件--写法
// class Child extends Component { 
//     render(){
//         return <>
//             <h1>Child</h1>
//         </>
//     }
// }

//函数式组件--写法
// function Child({count, addCount}) {//props
//     // console.log("props-----", props)
//     // 使用函数式组件时，应该尽量减少函数中--子组件的声明，否则--组件每次更新时都会--重新创建这个函数；
//     console.log("render-------") 
//     return <>
//         <h1>Child</h1>
//         <div>count: {count}</div>
//         <button onClick={addCount}>AddCount</button>
//     </>
// }

/*
    useState:
    1、同一个组件可以通过 useSet 声明状态，并且可以多次调用useState，声明多个状态；
    2、useState 的setState方法，同样会受到批处理影响，多次调用setState会被合并只执行一次更新；
    3、useState 的setState方法，只有一个参数，该参数代表的是：该状态更新完之后的新状态；[不会再进行状态的浅合并]
*/
/*
    在React函数中调用 Hook
    1、React函数组件中
    2、React自定义Hook中
    3、只在最顶层使用Hook：在react中，保证hook的执行顺序，组件前和更新后 hook的执行顺序要保持一致；
*/
function Child() {
    // const [count, setCount] = useState(0);
    // const [val, setVal] = useState('KKB')
    //console.log("useState(0)----", useState(0)) //结果打印一个数组：[0,f函数]
    // console.log("useState(0)----", useState('KKB'))

    //const state =  useState(0)
    // console.log('state------', state)

    const [state, setState]= useState({
        count: 1,
        val: 'kkb'
    })
    const {count,val} = state;
    console.log("render---------")

    return <>
        <p>Child子组件</p>
        <div>count:{count}</div>
        <button
            onClick={() => {
                setState({
                    ...state,
                    count: count + 1
                });
                console.log('set===========')
            }}
        >Add</button>
        <div>-------------------------</div>
        <input
            type='text'
            value={val}
            onChange={({ target }) => {
                setState({
                    ...state,
                    val: target.value
                })
            }}
        ></input>
    </>
}
export default Child;