import React, {Component} from 'react'
import * as Actions from '../Action'
import store from '../Store'
const buttonStyle = {
    margin: '10px'
}
/*
 * 傻瓜组件
 * Counter组件完全没有state，只有一个render方法，所有的数据都来自props，这种组件叫“无状态”组件
 */
// class Counter extends Component{
//     render(){
//         const {caption, add, math, value} = this.props
//         return(
//             <div>
//                 <button style={buttonStyle} onClick={add}>+</button>
//                 <button style={buttonStyle} onClick={math}>-</button>
//                 <span>{caption} count:{value}</span>
//             </div>
//         )
//     }
// }

//缩减版傻瓜组件，无状态组件，因为没有状态，不需要对象表示，所以连类都不需要了，对于只有一个render方法的组件，缩略为一个函数足矣。
function Counter({ caption, add, math, value }){
    //解构赋值或者props参数
    // function Counter(props) {
    // const { caption, add, math, value } = props
    return (
        <div>
            <button style={buttonStyle} onClick={add}>+</button>
            <button style={buttonStyle} onClick={math}>-</button>
            <span>{caption} count:{value}</span>
        </div>
    )
}

//容器组件
/**
 * CounterContainer承担了所有的和Store关联的工作，它的render函数所做的就是渲染傻瓜组件Counter而已，只负责传递必要的prop
 */
class CounterContainer extends Component{
    constructor(props){
        super(props)
        // console.log('enter constructor',props.caption)

        this.add = this.add.bind(this)
        this.math = this.math.bind(this)
        this.getOwnState = this.getOwnState.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = this.getOwnState()
    }

    getOwnState(){
        // console.log(store.getState(),'state')
        return {
            value: store.getState()[this.props.caption]
        }
    }

    componentDidMount(){
        //通过Store的subscribe监听其变化，只要Store的状态发生变化就会调用这个组件的onChange方法。
        //增加监听的函数也可以写到构造函数中
        store.subscribe(this.onChange)
    }
    componentWillUnmount(){
        //把监听注销
        store.unsubscribe(this.onChange)
    }
    onChange(){
        this.setState(this.getOwnState())
    }

    add(){
        //派发action
        //action构造函数只负责创建对象，要派发action就需要调用store.dispatch函数
        store.dispatch(Actions.increment(this.props.caption))
        // Actions.increment(this.props.caption)
    }

    math() {
        store.dispatch(Actions.decrement(this.props.caption))
        // Actions.decrement(this.props.caption)
    }

    render(){
        const value = this.state.value
        const {caption} = this.props
        return(
            <Counter caption={caption} add={this.add} math={this.math} value={value} />
        )
    }
}

//export导出的是容器组件，对于这个视图模块来说，根本不会感受到傻瓜组件的存在，从外部看到的就只是容器组件。
export default CounterContainer