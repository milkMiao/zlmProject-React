import { Component } from "react";
import TodoItem from "./TodoItem";
class Todos extends Component {
    /* 
        key属性: 
            在React，组件每次更新时，会生成一个虚拟DOM，和原有的虚拟DOM进行对比，
            如果是批量生成的一组元素，那React就会跟进 Key 值去做对比；

        key给列表中的元素添加一个标记--id，方便在更新前后用于对比；

        key如何取值：
            1、同一列表中，key值唯一；
            2、更新前后，同一元素，key值不能变；
        
        建议：key使用数据的id

        createElement(Todo, {
            key: item.id,
            ...this.props,
            todo: item
        })
    */
    render() {
        const {todo} = this.props;
        console.log('Todo.js----', todo, {...this.props})
        return <>
            {/* 子组件li--TodoItem */}
            <ul id="todo-list">{
                todo.map(item =>{ 
                   return <TodoItem key={item.id} {...this.props} todo={item}/> 
                })
            }</ul>
        </>
    }
}
export default Todos;
