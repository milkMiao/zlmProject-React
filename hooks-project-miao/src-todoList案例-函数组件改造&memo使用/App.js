import { useState } from 'react';
import './App.css';
import './index.css'
import Todos from './Todo';
import Stats from './Stats';

export default () => {
  const [todo, setTodo] = useState([
    { id: 0, title: "今晚上王者", done: false },
    { id: 1, title: "今晚上两颗心", done: true },
    { id: 2, title: "今晚看两本书", done: false }
  ])

  //添加TodoItem
  const addTodo = ({ keyCode, target }) => {
    if (keyCode === 13) {//回车
      if (target.value.trim()) {
        setTodo([
          ...todo,
          {
            id: Date.now(),
            title: target.value,
            done: false
          }
        ])
        target.value = ""
      }
    }
  }

  //删除TodoItem
  const removeTodo = (id) => {
    //filter--本身就返回一个新的引用
    setTodo({
      todo: todo.filter(item => item.id !== id)
    })
  }

  const changeDone = (id, done) => {
    setTodo({
      todo: todo.map(item => {//map是映射新的引用
        if (item.id === id) {
          item.done = done;
          return {
            ...item,
            done
          }
        }
        return item;
      })
    })
  }

  //删除--已完成的todoItem
  const removeDone = () => {
    setTodo({
      todo: todo.filter(item => (!item.done))
    })
  }

  //编辑todoItem
  const editTodo = (title, id) => {
    setTodo({
      //map是映射新的引用
      todo: todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title
          }
        }
        return item;
      })
    })
  }

  return <div id="todoapp">
    <div className='title'><h1>todoList案例</h1></div>
    <div id="create-todo">
      <input
        type="text"
        id="new-todo"
        placeholder='what needs to done?'
        autoComplete='off'
        onKeyDown={addTodo}
      ></input>
    </div>

    <>
      <Todos
        todo={todo}
        removeTodo={removeTodo}
        changeDone={changeDone}
        editTodo={editTodo}
      />

      <Stats
        todo={todo}
        removeDone={removeDone}
      />
    </>
    
  </div>

};

