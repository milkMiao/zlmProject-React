import { useState } from 'react';

function Child() {
    const [count, setCount] = useState(0)
    const [val, setVal] = useState('kkb')

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