import { useEffect, useRef, useState } from "react";

export default ({ todo, removeTodo, changeDone, editTodo }) => {
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
};
