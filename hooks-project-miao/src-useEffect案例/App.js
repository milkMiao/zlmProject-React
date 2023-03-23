import Child from "./Child";
import {useState} from 'react';

/*
  类组件：
  1、componentDidMount、componentDidUpdate、componentWillUnmount 需要清除副作用；

  useEffect--副作用钩子
*/

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <h1>useEffect使用</h1>
      {/* 两个子组件公用一个状态【一个变量isMount】的现象，想到 useRef接来解决*/}
      {show ?  <><Child /></> : ""}  
      <div>--------------------------</div>
      <button 
        onClick={()=>{
          setShow(!show)
      }}>显示隐藏</button>
    </>
  );
}

export default App;
