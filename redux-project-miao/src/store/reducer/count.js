import actions from "../actions";

function count(count=1, action){
    switch(action.type){ //注意：使用combineReducers，action.type 要做到全局唯一；
        case actions.count.add : //方法二：actions.count.add  方法一："count/add"
            return {
                count: count+1
            }
    }
    return count;
}
export default count;
