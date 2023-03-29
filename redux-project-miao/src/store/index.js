import { combineReducers, createStore } from "redux";

import count from "./reducer/count";
import nub from "./reducer/nub";
import todos from "./reducer/todos";

const reducer = combineReducers({
  count: count,
  nub: nub,
  todos: todos
})
// console.log("reducer-----", reducer)
export default createStore(reducer);