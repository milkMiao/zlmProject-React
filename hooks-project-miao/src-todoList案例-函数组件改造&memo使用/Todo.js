import TodoItem from "./TodoItem";

export default ({ todo, ...props }) => {
    console.log('Todo.js---', todo )
    return <>
        <ul id="todo-list">{
            todo.map(item => {
                return <TodoItem key={item.id} {...props} todo={item} />
            })
        }</ul>
    </>
};