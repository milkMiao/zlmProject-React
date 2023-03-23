import { useEffect, useState } from 'react';
/*
    useEffect：案例

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
    1、挂载完成之后，做某事；
    2、更新完成之后，做某事；
    3、挂载完成 && 更新完成之后，做某事；
    4、即将卸载做某事；
*/
function Child() {
    const [count, setCount] = useState(0)
    const [val, setVal] = useState('kkb')

    useEffect(() => {
        console.log('1、挂载完成之后,做某事!')
        return  ()=>{
            console.log('4、即将卸载做某事!')
        }
    },[]) //依赖参数

    useEffect(() => {
        console.log('3、挂载完成&&更新完成之后，做某事！')
    })

    return <>
        <p>Child子组件</p>
        <p>count: {count}</p>
        <button
            onClick={() => {
                setCount(count + 1)
                // setVal(count + "value")
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