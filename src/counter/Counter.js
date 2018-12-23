import React, {Component} from 'react'
const buttonStyle = {
    margin: '10px'
}
class Counter extends Component{
    constructor(props){
        super(props)
        // console.log('enter constructor',props.caption)

        this.add = this.add.bind(this)
        this.math = this.math.bind(this)
        this.state={
            count: props.initValue || 0
        }
    }
    // componentWillMount(){
    //     console.log('enter componentWillMount', this.props.caption)
    // }

    // componentDidMount(){
    //     console.log('enter componentDidMount', this.props.caption)
    // }

    componentWillReceiveProps(nextProps){
        console.log('enter counter componentWillReceiveProps', nextProps.initValue)
    }

    shouldComponentUpdate(nextProps, nextState){
        //nextProps、nextstate、this.props、this.state之间做对比，没有变化就没有必要重新渲染
        return (nextProps.caption !== this.props.caption || nextState.count !== this.state.count)
    }

    add(){
        this.updateCount(true)
    }

    math() {
        this.updateCount(false)
    }

    updateCount(state){
        const previousValue = this.state.count
        const newValue = state ? previousValue + 1 : previousValue -1
        this.setState({count: newValue})
        this.props.onUpdate(newValue, previousValue)
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