import React, {Component} from 'react'
import store from '../Store'

class SumCounter extends Component{
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this)
        this.getOwnState = this.getOwnState.bind(this)
        store.subscribe(this.onChange)
        this.state = this.getOwnState()

    }

    onChange(){
        this.setState(this.getOwnState())
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange)
    }
    getOwnState(){
        const state = store.getState()
        let sum = 0
        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum += state[key]
            }
        }
        return {sum}
    }
    render(){
        return(
            <div>Total: {this.state.sum}</div>
        )
    }
}

export default SumCounter