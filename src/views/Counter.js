import React, {Component} from 'react'
import * as Actions from '../Action'
import CounterStore from '../stores/CounterStore'
const buttonStyle = {
    margin: '10px'
}
class Counter extends Component{
    constructor(props){
        super(props)
        // console.log('enter constructor',props.caption)

        this.add = this.add.bind(this)
        this.math = this.math.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state={
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.caption !== this.state.caption ||
                nextProps.count !== this.state.count)
    }

    componentDidMount(){
        CounterStore.addChangeListener(this.onChange)
    }

    componentWillUnmount(){
        CounterStore.removeAllListeners(this.onChange)
    }

    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption]
        this.setState({count: newCount})
    }

    add(){
        Actions.increment(this.props.caption)
    }

    math() {
        Actions.decrement(this.props.caption)
    }

    render(){
        console.log('enter render', this.props.caption)
        return(
            <div>
                <button style={buttonStyle} onClick={this.add}>+</button>
                <button style={buttonStyle} onClick={this.math}>-</button>
                <span>count:{this.state.count}</span>
                {/* <span>props:{this.props}</span> */}
            </div>
        )
    }
}
Counter.defaultProps={
    initValue: 0,
    onUpdate: f => f //默认是一个什么都不做的函数
}

export default Counter