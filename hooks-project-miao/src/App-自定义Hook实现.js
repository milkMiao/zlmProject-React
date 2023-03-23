import { useState, useMemo, useCallback, useEffect } from 'react';

/*
  自定义Hook：
  1、一般解决与状态相关的逻辑复用问题，使用较多；
  2、自定义Hook就是一个普通函数，但是该函数必须以use开始命名；
*/

function useNub(init) {
  const [nub, setNub] = useState(init)
  const plusNub = useCallback(() => {
    return setNub(nub + 1)
  }, [nub])
  const miuNub = useCallback(() => {
    return setNub(nub - 1)
  }, [nub])
  return [nub, plusNub, miuNub]
}

//info模块，根据滚动条的滚动，显示隐藏info块；
function useScrollY() {
  const [Y, setY] = useState(0)
  const setScrollY = useCallback(()=>{
    setY(window.scrollY)
  },[])
  useEffect(()=>{
    setScrollY();
    window.addEventListener('scroll', setScrollY)
    return ()=>{
      window.removeEventListener('scroll', setScrollY)
    }
  })
  return [Y, (newY)=>{
    window.scrollTo(window.scrollX, newY);
    setY(newY);
  }];
}

export default () => {
  const [count, setCount] = useState(1)
  // const [nub,setNub] = useState(1)
  const [nub, plusNub, miuNub] = useNub(1)
  const [val, setVal] = useState("字符串")


  // const maxVal = () => {
  //   return nub > count ? 'nub' : 'count';
  // }
  const maxVal = useMemo(() => {
    console.log("usememo------")
    return nub > count ? 'nub' : 'count';
  }, [nub, count])


  //1、未使用useMemo
  // const plusCount1 = () => {
  //   setCount(count + 1)
  // }

  //2、使用useMemo
  // const plusCount2 = useMemo(() => {
  //   return ()=>{ //返回一个函数
  //     setCount(count + 1)
  //   }
  // },[count])

  //3、简化版：useCallback--【直接拿到return之后的函数使用】
  const plusCount = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const miuCount = () => {
    setCount(count - 1)
  }

  // const plusNub1 = () => {
  //   setNub(nub + 1)
  // }
  // const miuNub1 = () => {
  //   setNub(nub - 1)
  // }
  const changeVal = ({ target }) => {
    setVal(target.value)
  }

  const [scrollY, setScrollY] = useScrollY();


  console.log("Appjs------render---")
  return <div>
    <style>
      {`
        #wrap div {
          width: 200px,
          height: 200px,
          background: pink,
          border: 2px solid #000
        }
        .info{
          position: fixed;
          left: 0,
          top: calc(50% -20px),
          width: 100px,
          background-color: red,
          color: #FFF
        }
      `}
    </style>

    <span>count: <button onClick={plusCount}>加+</button> {count} <button onClick={miuCount}>减-</button></span>
    <div>----------分隔符-------------</div>

    <span>nub:  <button onClick={plusNub}>加+</button> {nub} <button onClick={miuNub}>减-</button></span>
    <div>----------分隔符-------------</div>

    <p>当前比较大的是：{maxVal}</p><input type='text' value={val} onChange={changeVal}></input>{val}

    <div>----------分隔符-------------</div>
    <span className='info' 
      onClick={()=>{ 
        setScrollY(0)
      }}
    >0{scrollY}</span>
    <div id="wrap">
      {
        [...(".".repeat(30))].map((item, index) => {
          <div key={index}>这是第{index}个div</div>
        })
      }
    </div>
  </div>
};

