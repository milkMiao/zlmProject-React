import { createStore } from "redux";

/*
  store: 状态仓库
      1、getState 获取当前状态；
      2、dispatch 发起一个action（对状态修改的动作），
      3、修改state，通过 dispatch发起action后，
        在store中--会调用redux函数，并且会将state和action 传递给reduce；
        reduce被调用之后，会返回新的satet
      4、subscript--监听器，监听state改变；
      5、replaceReducer 替换掉reducer；

  reducer函数（纯函数）

  action：本身是一个普通对象，该对象有 type 和 payload 属性组成；
    1、type：属性是对 state 做出何种修改的描述
    2、payload：属性是附带参数
  
*/
const fn = (state = { count:1 }, action) => { //纯函数，任意命名
  // state--状态{count:1 } ，action--store.dispatch里内容{type: "add"}
  // console.log("-----", state, action) 

  switch(action.type){
    case  "add":
    return {
      count: state.count+1
    }
  }
  return state;
}

const store = createStore(fn);
// console.log("store----", store)
// console.log("store.getState---初始", store.getState()) // {count:1}

store.dispatch({ //dispatch 发起一个action（对状态修改的动作）
  type: "add"
})
// console.log("store.getState---add", store.getState()) // {count:2}

const unSubScript =  store.subscribe(()=>{
  console.log("监听器----", store.getState())
}) //监听state的改变

setInterval(()=>{
  store.dispatch({
    type: "add"
  })
}, 1000)
setTimeout(()=>{
  store.replaceReducer((state = { count:1 }, action) => { 
    switch(action.type){
      case  "add":
      return {
        count: state.count+5
      }
    }
    return state;
  })
}, 4000)
setTimeout(()=>{
  unSubScript(); //5s后取消监听，不会再执行程序
}, 5000)

