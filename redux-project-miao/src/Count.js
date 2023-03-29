import { useCallback } from "react";
import { connect } from "react-redux";
import actions from "./store/actions";

//Count组件
function Count(props) {
    const {count, dispatch} = props;
    // console.log("Count子组件---", props)
    const addCount = useCallback(()=>{
        console.log("addClick-----", props)
        //方法一：dispatch({ type: "count/add" })  
        
        //方法二：
        dispatch({ type: actions.count.add })
    },[])
    return <div>
        <p>Count: {count}</p>
        <button onClick={addCount}>count-递增</button>
    </div>
}

const withConnect = connect(state => {
    return {  count: state.count }
})
const NewCount = withConnect(Count);//Count传入的组件，NewCount返回的新组件
export default NewCount;