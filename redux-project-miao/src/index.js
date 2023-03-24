import ReactDOM from "react-dom";
import {Provider} from "react-redux"; //Provider-将数据传递给子后代
import App from "./App"
import store from "./store"

ReactDOM.render(
  //store 传递到整个项目中了
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector("#root")
);