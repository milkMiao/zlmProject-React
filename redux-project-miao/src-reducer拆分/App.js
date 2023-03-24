import Count from "./Count";
import Nub from "./Nub";

export default ()=>{
    return <div>
        <h1>Hello react-redux</h1>
         <Count info={"count"}/>  {/* 注：info会被合并到state中 */}
        <Nub />
    </div>
}