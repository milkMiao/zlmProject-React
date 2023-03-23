import { useEffect, useRef, useState } from 'react';

/*
    1、挂载完成之后，做某事；
    2、更新完成之后，做某事；
    3、挂载完成 && 更新完成之后，做某事；
    4、即将卸载做某事；
*/

// let isMount = false; //是否挂载，全局
function Child() {
    const [count, setCount] = useState(0)
    const [val, setVal] = useState('kkb')
    const isMount = useRef(false)//内部

    useEffect(() => {
        console.log('1、挂载完成之后,做某事!')
        return  ()=>{
            console.log('4、即将卸载做某事!')
        }
    },[]) //依赖参数

    useEffect(() => {
        console.log('3、挂载完成&&更新完成之后，做某事！')
    })

    useEffect(() => {
        if(isMount.current){
            console.log('2、更新完成之后,做某事!')
        } else{
            isMount.current = true;
        }
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