import { createStore } from "redux";

function fn(state = { count: 1, nub: 5 }, action) {
    // console.log("fn纯函数---", state, action)
    switch (action.type) {
        case "count-add":
            return {
                ...state,
                count: state.count + 1
            };
        case "nub-add":
            return {
                ...state,
                nub: state.nub + 5
            };

    }
    return state;
}

export default createStore(fn);