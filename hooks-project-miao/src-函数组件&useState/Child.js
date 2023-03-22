// import { Component } from 'react';
import { useState } from 'react';
/*
    在React函数中调用 Hook
    1、React函数组件中
    2、React自定义Hook中
    3、只在最顶层使用Hook：在react中，保证hook的执行顺序，组件前和更新后--hook的执行顺序要保持一致；
*/
function Child() {
    const [state, setState]= useState({
        count: 1,
        val: 'kkb'
    })
    const {count,val} = state;

    return <>
        <p>Child子组件</p>
        <div>count:{count}</div>
        <button
            onClick={() => {
                setState({
                    ...state,
                    count: count + 1
                });
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