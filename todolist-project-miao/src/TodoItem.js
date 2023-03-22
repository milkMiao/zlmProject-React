import { Component, createRef } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editVal: props.todo.title
        }
    }
    state = {
        edit: false
    }
    //更新的生命周期
    static getDerivedStateFromProps(props) {
        return props.todo;
    }
    //未编辑状态--》到编辑状态
    componentDidUpdate(prevProps, prevState) {//更新之前
        if ((!prevState.edit) && this.state.edit) {
            this.editInput.current.focus();
        }
    }

    //删除TodoItem
    removeItem = () => {
        const { removeTodo, todo } = this.props;
        // console.log('todoItem-------', todo)
        removeTodo(todo.id)
    }
    //复选框操作，是否完成此项todo
    // 注意：target需要用{ }包裹起来
    doneItem = ({ target }) => {
        const { changeDone, todo } = this.props;
        // console.log('target-----', target.checked)
        changeDone(todo.id, target.checked);
    }
    shouldComponentUpdate(nextProps) {
        // console.log('nextProps1----', nextProps.todo, 'this.props2-----', this.props.todo)
        // console.log('nextProps.todo==this.props.todo', nextProps.todo == this.props.todo)
        return nextProps.todo !== this.props.todo;
    }

    //双击文本，编辑title && 光标定位到input内
    toEmitItem = () => {
        // this.setState({
        //     edit: true
        // }, () => {
        //     //本次setState 引起的组件更新，更新完成
        //     this.editInput.current.focus();
        // })
        this.setState({
            edit: true
        })
        console.log("double-----click", this.state)
    }
    //光标离开input，改变edit状态
    cancelEmtItem = () => {
        const { editTodo, todo } = this.props;
        const { editVal } = this.state;
        if (editVal.trim()) {
            editTodo(editVal, todo.id)
        } else {
            this.setState({
                editVal: todo.title,
            })
        }
        this.setState({
            edit: false
        })
        console.log('blur-----', this.state)
    }

    /*
        在编辑todoItem时候，如果todoItem的值为空，则恢复编辑之前的数据；
    */
    editTitleChange = ({ target }) => {
        const { editTodo, todo } = this.props;
        console.log('editTitleChange-----', target.value)
        editTodo(target.value, todo.id);
        this.setState({
            editVal: target.value,
        })
    }

    editInput = createRef();
    // li = createRef();
    // componentDidMount(){
    //     console.log("componentDidMount------", this.editInput, this.li)
    // }
    render() {
        // const { title, done, id } = this.props.todo;
        // const { edit } = this.state;
        const { title, done, id, edit } = this.state;
        console.log('render-----', id, this.state)
        return <>
            <li className={`${edit ? 'editNo' : 'editBlock'}`} > {/* ref={this.li} */}
                <div className={`todo ${done ? 'done' : ''}`}>
                    <div className="display">
                        <input className="check"
                            value=""
                            type="checkbox"
                            checked={done}
                            onChange={this.doneItem}
                        />
                        <span onDoubleClick={this.toEmitItem} className={`${done ? 'todo-content' : ''}`}>{title}</span>
                        <span onClick={this.removeItem} className="todo-destory">X</span>
                    </div>

                    {/* ref={(node) => {
                        console.log("node-----获取节点实例/组件实例", node)
                    }} */}
                    <div className="edit">
                        <input
                            className="todo-input"
                            type="text"
                            ref={this.editInput}
                            value={title}
                            onChange={this.editTitleChange}
                            onBlur={this.cancelEmtItem}
                        />
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