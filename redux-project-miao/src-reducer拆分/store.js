import { combineReducers, createStore } from "redux";

// 建立一个新的文件夹： count.js、nub.js、todos.js、topics.js
import count from "./reducer/count";
import nub from "./reducer/nub";
import todos from "./reducer/todos";
import topics from "./reducer/topics";

//抽离到reducer文件夹内：
// function count(count, action){
//     return count;
// }
// function nub(nub, action){
//     return nub;
// }
// function todos(todos=[], action){
//     return todos;
// }
// function topics(topics={}, action){
//     return topics;
// }

//reducer的拆分【如上count、nub、todos、topics 多个自定义函数】
// function reducer(state={count: 1,nub: 5 , todos: [],topics: {}}, action){
//     console.log("store----reducer--", state)
//     return {
//         count: count(state.count , action),
//         nub: nub(state.nub, action),
//         todos: todos(state.todos, action),
//         topics: topics(state.topics, action)
//     }
// }

//注意：action.type 要做到全局唯一；
const reducer = combineReducers({
    count: count,
    nub: nub,
    todos: todos,
    topics: topics
})
console.log("reducer-----", reducer)
export default createStore(reducer);