import { useEffect, useRef, useState } from 'react';

/*
    1、挂载完成之后，做某事；
    2、更新完成之后，做某事；
    3、挂载完成 && 更新完成之后，做某事；
    4、即将卸载做某事；

    const ref = useRef(init);
    1、关联节点实例；   如下：countEl
    2、传递组件更新的一些数据，当 useRef 中存储的某项数据时，该数据不会随着组件的更新而自动更新；
        如下：prevCount
    
*/
function Child() {
    const [count, setCount] = useState(0)
    const [val, setVal] = useState('kkb')

    const countEl = useRef();
    // useEffect(() => {
    //     console.log('useRef---countEl--', countEl)
    // })

    // const prevCount = useRef(count); //打印一直是初始值：{current : 0}
    // prevCount.current = count; //手动更新count的值，{current: 1} 。。。
    // useEffect(() => {
    //     // console.log('useRef---countEl--', countEl)
    //     console.log('useRef---prevCount--', prevCount, count)
    // })

    const prevCountInner = useRef();
    useEffect(() => {
        console.log('useRef---prevCountInner--', prevCountInner, countEl.current.innerTHML)
        prevCountInner.current = countEl.current.innerTHML
    })

    return <>
        <p>Child子组件</p>
        <p ref={countEl}>count: {count}</p>
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