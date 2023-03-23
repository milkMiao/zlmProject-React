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
      {show ?  <Child /> : ""}
      <button 
        onClick={()=>{
          setShow(!show)
      }}>显示隐藏</button>
    </>
  );
}

export default App;
