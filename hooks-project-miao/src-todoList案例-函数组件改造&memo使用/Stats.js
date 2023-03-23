export default ({ todo, removeDone }) => {
    const doneLen = todo.filter(item => item.done).length;
    const unDoneLen = todo.length - doneLen;
    console.log('打印---Stats---', doneLen, unDoneLen)

    const removeDoneItem = () => {
        removeDone();
    }
    return <>
        <div id='todo-stats'>
            <span className='todo-count'>
                <span className='number'>{unDoneLen}</span>
                <span className='word'>项待完成</span>
            </span>

            {doneLen ? <span className='todo-clear'>
                <a href="www.baidu.com" onClick={removeDoneItem}>Clear <span>{doneLen}</span> 已完成事项</a>
            </span> : ""
            }
        </div>
    </>
};