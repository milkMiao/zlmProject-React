import { Component } from 'react';
import './App.css';
import Todos from './Todos';
import Stats from './Stats';

class App extends Component {
  render() {
    return <div id="todoapp">
      <div className='title'><h1>todo</h1></div>
      <div id="create-todo">
        <input type='text' id="new-todo" placeholder='what needs to done?' autoComplete='off'></input>
      </div>

      <Todos/>

      <Stats/>
    </div>
  }
}

export default App;
