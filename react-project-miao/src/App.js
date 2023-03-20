import { Component } from "react"
/*
    定义类组件：
    1、该类必须继承自 React.Component
    2、该类必须具有一个 render方法, 返回值是该组件要构建的试图；

    state状态：
    1、在React中，组件类似于状态机，当组件的状态发生变化，关联的视图，也会随之发生变化；
    2、在react中，state是一种不可变值，唯一修改state的办法是：
       调用组件是setState，根据原有状态，映射新状态；
    
    setState(updater, [callback])
    1、updater：新的state ｜｜ function
       --updaterState 对象，该对象中包含的属性，是我们要修改的状态，setState会帮助我们进行浅合并；
       --func：调用setState如果参数是一个function，则执行function后，
               拿到function返回值，并把返回值更新到状态里；
       --callback：当前组件更新完之后的回调函数；
       --setState是同步执行，还是异步？
         【默认情况下，调用setState表现为异步，并且在一个操作中，多次调用，会合并处理，只更新一次；】
    2、调用 setState 之后，组件会进行更新，在更新时，会重新执行render方法，
       生成新的虚拟Dom，然后进行新旧Dom对比，找到差异修改真实DOM；

    setState同步or异步问题？
    1、在React可以监控的地方：react事件，react的组件生命周期，以及其他react方法中，呈现--异步表现，并且会对setState进行合并更新
    2、在异步方法中，或原生事件中，setState呈现--同步表现，不会对setState 进行合并处理；

    事件：
    在React中事件类似于 JS 中事件写法；
*/

class App extends Component {
    state = {
        count: 1,
        data: {
            name: 'kkb',
            age: 18
        }
    }
    render() {
        const { count, data } = this.state;
        // setTimeout(()=>{
        //     this.setState({
        //         count: count + 1
        //     })
        // },1000)
        console.log("render-----------")
        return <div>
            <h1>Hello React App.js</h1>
            {/* <p>count: {count}</p>
            <button onClick={()=>{
                this.setState ({
                    count: count +1
                }, ()=>{
                    console.log('回调函数，组件更新完成')
                })
            }}>递增</button> */}

            {/* <p>name:{data.name}, age:{data.age}</p>
            <button onClick={()=>{
                this.setState ({
                    data: {
                        ...data,
                        age: data.age+1
                    }
                })
            }}>data年龄递增</button> */}

            <p>同步or异步: {this.state.count}</p>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
                console.log(this.state.count)
            }}>count---递增</button>
        </div>
    }
}

export default App;