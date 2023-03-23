import { memo, useEffect, useRef, useState } from "react";

/*
    Memo：备忘录的意思
    React.memo(Com[onent,  [areEqua(prevProps, nextProps)] )

    Memo的作用：
    1、用来通知内部组件是否需要更新；
    2、高阶组件：本质是一个高阶函数，高阶组件--接收一个组件-A，并返回一个新组件B；
    3、当组件B被调用时，组件B的内部会调用组件A
        调用组件B的父级更新时，组件B会去调用函数C，
        函数C的返回值--如果为true，则不更新A，如果false-则更新A

    areEqua：调用参数，平等的--调和作用

    引入memo项目会存在一些小问题：多个数据源
    解决方法：
    1、redux：单一数据源，永远只操作一份数据；
    2、todo.todo
*/

// export default ({ todo, removeTodo, changeDone, editTodo }) =>{...}
function TodoItem ({ todo, removeTodo, changeDone, editTodo }) {
    const [edit, setEdit] = useState(false);
    const [editVal, setEditVal] = useState(todo.title);
    const { id, title, done } = todo;

    const doneItem = ({ target }) => {
        changeDone(id, target.checked);
    }
    const toEmitItem = () => {
        setEdit(true);
    }
    const removeItem = () => {
        removeTodo(id)
    }
    const editInput = useRef()

    const editTitleChange = ({ target }) => {
        editTodo(target.value, id);
        setEditVal(target.value)
    }

    const cancelEmtItem = () => {
        if (editVal.trim()) {
            editTodo(editVal, id)
        } else {
            setEditVal(title)
        }
        setEdit(false);
    }

    useEffect(() => {
        if (edit) {//编辑状态
            editInput.current.focus();
        }
    }, [edit])

    console.log("render----------", id, todo)

    return <>
        <li className={`${edit ? 'editNo' : 'editBlock'}`} >
            <div className={`todo ${done ? 'done' : ''}`}>
                <div className="display">
                    <input className="check"
                        value=""
                        type="checkbox"
                        checked={done}
                        onChange={doneItem}
                    />
                    <span onDoubleClick={toEmitItem} className={`${done ? 'todo-content' : ''}`}>{title}</span>
                    <span onClick={removeItem} className="todo-destory">X</span>
                </div>

                <div className="edit">
                    <input
                        className="todo-input"
                        type="text"
                        ref={editInput}
                        value={title}
                        onChange={editTitleChange}
                        onBlur={cancelEmtItem}
                    />
                </div>
            </div>
        </li>
    </>
}

//触发数据的更新：【false--前后数据变化了，组件更新， true-前后数据没变化，组件不更新】
//              就实现了变更的更新，未变更的数据不会更新
//areEqua参数作用()=>{...}----------控制子组件是否更新
const NewTodo = memo(TodoItem, (prevProps,nextProps)=>{//函数C--true不更新A组件，false则更新A组件
    // return true;
    return prevProps.todo === nextProps.todo;
})
console.log('memo返回一个新的组件---', NewTodo)

export default TodoItem;
