// import actions from "../actions";

function nub(nub=5, action){
    switch(action.type){//注意：使用combineReducers，action.type 要做到全局唯一；
        case "nub/add" :  //方法二：actions.nub.add
            return {
                nub: nub+5
            }
    }
    return nub;
}
export default nub;