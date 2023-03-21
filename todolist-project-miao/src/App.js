import { Component } from 'react';
import './App.css';
import './index.css'
import Stats from './Stats';
import Todos from './Todo';

class App extends Component {
  state = {
    todo: [
      {
        id: 0,
        title: "今晚上王者",
        done: false
      },
      {
        id: 1,
        title: "今晚上两颗心",
        done: true
      },
      {
        id: 2,
        title: "今晚看两本书",
        done: false
      },
    ]
  }
  //添加TodoItem
  /*
    注意：state是不可变值，在修改state时，不要修改原有的state，
         而是根据原有的state映射出修改的state；
  */
  addTodo = ({keyCode, target}) => {
    const { todo } = this.state;
    // console.log('输入框----', target.value)
    if (keyCode === 13) {//回车
      if (target.value.trim()) {//输入框内容不为空
        //注意：这里有坑，后续优化

        //修改前
        // todo.push({
        //   id: Date.now(),
        //   title: target.value,
        //   done: false
        // })
        // this.setState({
        //   todo
        // })

        //修改后
        this.setState({
          todo: [
            ...todo,
            {
              id: Date.now(),
              title: target.value,
              done: false
            }
          ]
        })
        target.value = ""
      }

    }
  }

  //删除TodoItem
  removeTodo = (id) => {
    const {todo} = this.state;
    this.setState({
      todo: todo.filter(item => item.id !== id) //filter--本身就返回一个新的引用
    })
  }
  changeDone = (id,done) => {
    const {todo} = this.state;
    //修改前: 原有基础数据上修改
    // todo.forEach(item =>{
      // if(item.id === id){
      //   console.log('changeTodo----',item.id)
      //   item.done = done;
      // }
    // })

    //修改后
    this.setState({
      todo: todo.map(item =>{//map是映射新的引用
        if(item.id === id){
          // console.log('changeTodo----',item.id)
          item.done = done;
          return {
            ...item,
            done
          }
        }
        return item;
      })
    })
    // console.log('App.js----changeDOne', todo)
  }
  editTodo = () => {

  }
  render() {
    const { todo } = this.state;
    // console.log('App.js-----', todo)
    return <div id="todoapp">
      <div className='title'><h1>todoList案例</h1></div>
      <div id="create-todo">
        <input
          type="text"
          id="new-todo"
          placeholder='what needs to done?'
          autoComplete='off'
          onKeyDown={this.addTodo}
        ></input>
      </div>

      <Todos
        todo={todo}
        removeTodo={this.removeTodo}
        changeDone={this.changeDone}
        editTodo={this.editTodo}
      />

      <Stats />
    </div>
  }
}

export default App;
