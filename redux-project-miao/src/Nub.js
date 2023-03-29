import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"; //useStore
import actions from "./store/actions";

export default ()=>{
    const nub = useSelector(state=> state.nub)
    const dispatch = useDispatch();
    const addNub = useCallback(()=>{
        dispatch({ type: actions.nub.add }) // dispatch({ type: "nub/add" })
    },[])

    // console.log("Nub子组件-----", nub)
    // console.log("useStore-----",useStore())
    return <div>
        <p>Nub: {nub}</p>
        <button onClick={addNub}>Nub-递增</button>
    </div>
}