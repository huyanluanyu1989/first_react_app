import React, {Component} from 'react'
import Counter from './Counter'

class ControlPanel extends Component{
    constructor(props){
        super(props)
        this.initValues = [10, 20, 30]
        const initSum = this.initValues.reduce((a,b)=>a+b,0)
        this.onCounterUpdate = this.onCounterUpdate.bind(this)
        this.state = {
            initSum
        }
    }
    onCounterUpdate(newValue,previousValue){
        const valueChange = newValue - previousValue
        this.setState({initSum:this.state.initSum+valueChange})
    }
    render() {
        // console.log('enter controlPanel render')
        return (
            <div>
                {/* this.forceUpdate() 强制引发一次重绘 */}
                <button onClick={()=>this.forceUpdate()}>Click me to repaint!</button>
                <Counter onUpdate={this.onCounterUpdate} caption='first' initValue={this.initValues[0]} />
                <Counter onUpdate={this.onCounterUpdate} caption='second' initValue={this.initValues[1]} />
                <Counter onUpdate={this.onCounterUpdate} caption='third' initValue={this.initValues[2]} />
                <span>sum:{this.state.initSum}</span>
            </div>
        )
    }
}

export default ControlPanel