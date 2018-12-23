import React, {Component} from 'react'
import SumStore from '../stores/SumStore'

class SumCounter extends Component{
    constructor(props){
        super(props)
        this.onUpdate = this.onUpdate.bind(this)
        this.state = {
            sum: SumStore.getSum()
        }
    }
    componentDidMount(){
        SumStore.addChangeListener(this.onUpdate)
    }
    componentWillUnMount(){
        SumStore.removeChangeListener(this.onUpdate)
    }

    onUpdate(){
        this.setState({
            sum: SumStore.getSum()
        })
    }
    render(){
        return(
            <div>count: {this.state.sum}</div>
        )
    }
}

export default SumCounter