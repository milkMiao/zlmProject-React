import { Component } from "react";

class Stats extends Component {
    removeDoneItem = () => {
        this.props.removeDone();
    }
    render() {
        const {todo} = this.props;
        const doneLen = todo.filter(item => item.done).length;
        const unDoneLen = todo.length - doneLen;
        console.log('1111',doneLen, unDoneLen)

        return <>
            <div id='todo-stats'>
                <span className='todo-count'>
                    <span className='number'>{unDoneLen}</span>
                    <span className='word'>项待完成</span>
                </span>

                {doneLen ? <span className='todo-clear'>
                        <a href="www.baidu.com" onClick={this.removeDoneItem}>Clear <span>{doneLen}</span> 已完成事项</a>
                    </span> : ""
                }
            </div>
        </>
    }
}

export default Stats;