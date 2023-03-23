import { useEffect, useState } from 'react';
/*
    useEffect：副作用钩子

    useEffect(() => {
        // effect函数
        return () => {
            // cleanup函数
        }
    }, [依赖参数])
    用于在react函数中，来处理副作用，类似于类组件中的生命周期函数；

    副作用是什么：数据请求，DOM操作；

    1、挂载阶段：
        A、从上到下一行行执行代码，如果碰到useEffect，则对应的effect函数，存储到一个队列中，
            当组件挂载完成之后，按照添加顺序执行 effect队列；
        B、获取 cleanup 函数，将cleanup函数存入一个队列；

    2、更新阶段：
        A、从上到下一行行执行代码，如果碰到useEffect，则对应的effect函数，存储到一个队列中，
            当组件更新完成之后，找到cleanup队列，依次执行；按添加顺序执行effect队列；
        B、获取 cleanup 函数，将cleanup函数存入一个队列；
        C、再执行具体的 effect 函数 或 cleanup 函数时，会观察该 useEffect 对应的依赖数据，是否产生变化；
            如果产生变化，则执行，否则不执行；

    3、卸载阶段：
        找到对应的 cleanup队列，依次执行。
    
    依赖参数：
    1、不写依赖参数 useEffect(()=>{ ... }),组件有更新，会执行 cleanup函数和effect函数
    2、有写依赖参数 useEffect(()=>{ ... }, [多个依赖参数])，则组件更新时，
        其依赖参数有变化，会执行 cleanup函数和effect函数；
    3、有写依赖参数 useEffect(()=>{ ... }, [0个依赖参数])，则组件更新时，
        不会执行 cleanup函数和effect函数
*/

/*
    打印顺序：//第一步：刷新界面
            render-----组件挂载完成，
            effect-1，
            effect-2
            
            //第二步：点击递增按钮
            render-----组件挂载完成
            cleanup-1
            cleanup-2
            effect-1
            effect-2

            //第三步：卸载--显示隐藏操作
            cleanup-1
            cleanup-2
*/
function Child() {
    const [count, setCount] = useState(0)
    const [val, setVal] = useState('kkb')

    //格式
    useEffect(() => {
        console.log('effect-1')
        return () => {
            console.log('cleanup-1')
        }
    },[count]) //依赖参数

    useEffect(() => {
        console.log('effect-2')
        return () => {
            console.log('cleanup-2')
        }
    },[val])

    console.log("render-----组件挂载完成")
    return <>
        <p>Child子组件</p>
        <p>count: {count}</p>
        <button
            onClick={() => {
                setCount(count + 1)
                // setVal(count + "value")
                console.log("set----")
            }}
        >递增</button>

        <div>--------------------------</div>
        <input
            type='text'
            value={val}
            onChange={({target})=>{
                setVal(target.value);
            }}
        ></input>
    </>
}
export default Child;