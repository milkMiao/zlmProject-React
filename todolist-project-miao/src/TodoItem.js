import { Component } from "react";

class TodoItem extends Component {
    change = () => {
        console.log('change------')
    }
    //删除TodoItem
    removeItem = () => {
        const { removeTodo, todo } = this.props;
        // console.log('todoItem-------', todo)
        removeTodo(todo.id)
    }
    //复选框操作，是否完成此项todo
    // 注意：target需要用{ }包裹起来
    doneItem = ({target}) => {
        const { changeDone, todo } = this.props;
        // console.log('target-----', target.checked)
        changeDone(todo.id, target.checked);
    }
    shouldComponentUpdate(nextProps){
        console.log('nextProps1----', nextProps.todo, 'this.props2-----',this.props.todo)
        // console.log('nextProps.todo==this.props.todo', nextProps.todo == this.props.todo)
        return nextProps.todo !== this.props.todo;
    }
    render() {
        const { title, done, id } = this.props.todo;
        console.log('render-----',id)
        return <>
            <li className="editing">
                <div className={`todo ${done ? 'done' : ''}`}>
                    <div className="display">
                        <input className="check"
                            value=""
                            type="checkbox" 
                            checked={done} 
                            onChange={this.doneItem}
                        />
                        <span className={`${done ? 'todo-content' : ''}`}>{title}</span>
                        <span className="todo-destory" onClick={this.removeItem}>X</span>
                    </div>
                    <div className="edit">
                        <input className="todo-input" type="text" value={title} onChange={this.change} />
                    </div>
                </div>
            </li>

            {/* <li className="editing">
                <div className="todo done">
                    <div className="display">
                        <input className="check" type="checkbox" onChange="" />
                        <span className="todo-content">今晚上王者 </span>
                        <span className="todo-destory"></span>
                    </div>
                    <div className="edit">
                        <input className="todo-input" type="text" value="今晚上王者" onChange="" />
                    </div>
                </div>
            </li> */}

            {/* <li className="">
                <div className="todo">
                    <div className="display">
                        <input className="check" type="checkbox" onChange=""  />
                        <span className="todo-content">给学员留一个大惊喜 </span>
                        <span className="todo-destory"></span>
                    </div>
                    <div className="edit">
                        <input className="todo-input" type="text" value="给学员留一个大惊喜" onChange=""  />
                    </div>
                </div>
            </li> */}
        </>
    }
}
export default TodoItem;