import React, {Component} from 'react'
import Counter from './Counter'
import SumCounter from './SumCounter'

class ControlPanel extends Component{
    
    render() {
        return (
            <div>
                <Counter caption='First' />
                <Counter caption='Second' />
                <Counter caption='Third' />
                <SumCounter />
            </div>
        )
    }
}

export default ControlPanel