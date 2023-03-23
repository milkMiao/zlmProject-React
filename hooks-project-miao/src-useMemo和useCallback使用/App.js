import { useState, useMemo, useCallback } from 'react';

/*
  usememo: 
  const data = usememo(cb, [])  注：data是cb的返回值，[]依赖参数

  当usememo返回值是一个函数的时候，可以使用 useCallback做简化；
*/

export default () => {
  const [count, setCount] = useState(1)
  const [nub, setNub] = useState(1)
  const [val, setVal] = useState("字符串")

  // const maxVal = () => {
  //   return nub > count ? 'nub' : 'count';
  // }
  const maxVal = useMemo(() => {
    console.log("usememo------")
    return nub > count ? 'nub' : 'count';
  }, [nub,count])

  //1、未使用useMemo
  const plusCount1 = () => {
    setCount(count + 1)
  }

  //2、使用useMemo
  const plusCount2 = useMemo(() => {
    return ()=>{ //返回一个函数
      setCount(count + 1)
    }
  },[count])

  //3、简化版：useCallback--【直接拿到return之后的函数使用】
  const plusCount = useCallback(()=>{
    setCount(count + 1)
  },[count])
  const miuCount = () => {
    setCount(count - 1)
  }


  const plusNub = () => {
    setNub(nub + 1)
  }
  const miuNub = () => {
    setNub(nub - 1)
  }
  const changeVal = ({ target }) => {
    setVal(target.value)
  }

  console.log("Appjs------render---")
  return <div>
    <span>count: <button onClick={plusCount}>加+</button> {count} <button onClick={miuCount}>减-</button></span>
    <div>----------分隔符-------------</div>

    <span>nub:  <button onClick={plusNub}>加+</button> {nub} <button onClick={miuNub}>减-</button></span>
    <div>----------分隔符-------------</div>

    <p>当前比较大的是：{maxVal}</p><input type='text' value={val} onChange={changeVal}></input>{val}
  </div>

};

