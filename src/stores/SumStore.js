import * as Actiontypes from '../ActionTypes'
import AppDispatcher from '../AppDispatcher'
import CounterStore from './CounterStore'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

function counterSum(counterValues){
    let sum = 0
    for(const key in counterValues){
        if(counterValues.hasOwnProperty(key)){
            sum += counterValues[key]
        }
    }
    return sum
}

const SumStore = Object.assign({},EventEmitter.prototype,{
    getSum:()=>{
        return counterSum(CounterStore.getCounterValues())
    },
    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    }
})

SumStore.dispatchToken = AppDispatcher.register((action) => {
    if(action.type === Actiontypes.INCREMENT || action.type === Actiontypes.DECREMENT){
        AppDispatcher.waitFor([CounterStore.dispatchToken])
        SumStore.emitChange()
    }
})

export default SumStore