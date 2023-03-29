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
        todo.todo.push({ //todo.todo
          id: Date.now(),
          title: target.value,
          done: false
        })
        setTodo({
          todo: todo.todo  //todo.todo
        })
        target.value = ""
      }
    }
  }

  //删除TodoItem
  const removeTodo = (id) => {
    //filter--本身就返回一个新的引用
    const newTodo = todo.todo;
    const index = newTodo.findIndex(item => item.id === id)
    newTodo.splice(index , 1) //splice不改变数组引用
    setTodo({
      // todo: todo.filter(item => item.id !== id) filter会改变引用换一种
      todo: newTodo
    })
  }

  const changeDone = (id, done) => {
    todo.todo.forEach((item, index)=>{
      if (item.id === id) {
       todo.todo[index]  ={
          ...item,
          done
       }
      }
    })
    setTodo({
      todo: todo.todo
    })
  }

  //删除--已完成的todoItem
  const removeDone = () => {
    // setTodo({
    //   todo: todo.filter(item => (!item.done))
    // })
    todo.todo.forEach((item)=>{
      if(item.done){
        removeTodo(item.id)
      }
    })
  }

  //编辑todoItem
  const editTodo = (title, id) => {
    todo.todo.forEach((item, index)=>{
      if (item.id === id) {
       todo.todo[index]  ={
          ...item,
          title
       }
      }
    })
    setTodo({
      todo: todo.todo
    })

    // setTodo({
    //   //map是映射新的引用
    //   todo: todo.map(item => {
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         title
    //       }
    //     }
    //     return item;
    //   })
    // })
  }

  console.log("Appjs------render---")
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
        todo={todo.todo}
        removeTodo={removeTodo}
        changeDone={changeDone}
        editTodo={editTodo}
      />

      <Stats
        todo={todo.todo}
        removeDone={removeDone}
      />
    </>
    
  </div>

};

