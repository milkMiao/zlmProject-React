import { useCallback } from "react";
import { connect } from "react-redux"
// import actions from "./actions";
/*
    const withConnect = connect(select: (state)=>{ 
        return { count: state.count } //返回是一个对象
    })
    1、select函数作用：从store中的state--截取该组件需要的数据，返回值是state所需要的部分，类型必须是一个对象；
    2、withConnect： 高阶组件，调用该高阶组件，传入组件--COunt 或者被高阶组件的 返回组件--NewCount；
       NewCount--被调用，Count可以获取到--截取后到state，以及dsipatch方法；
*/

//Count组件
function Count(props) {
    console.log("Count子组件---", props)
    const {count, dispatch} = props;
    const addCount = useCallback(()=>{
        //方法一：
        dispatch({ type: "count/add" })  
        
        //方法二：
        // dispatch({ type: actions.count.add })
    },[])
    return <div>
        <p>Count: {count}</p>
        <button onClick={addCount}>count-递增</button>
    </div>
}

// const withConnect = connect(state => {
//     return {  count: state.count }
// })
// const NewCount = withConnect(Count);//Count传入的组件，NewCount返回的新组件
// export default NewCount;

//简化版
export default connect(state => { return {  count: state.count }})(Count)
