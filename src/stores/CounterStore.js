import AppDispatcher from '../AppDispatcher'
import * as ActionTypes from '../ActionTypes'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'change'

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
}

const CounterStore = Object.assign({},EventEmitter.prototype,{
    //让应用的其它模块可以读取当前的计数值
    getCounterValues:function(){
        return counterValues
    },
    //对CounterStore状态更新的广播
    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },
    //添加监听函数
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback)
    },
    //删除监听函数
    removeChangeListener: function (callback){
        this.removeListener(CHANGE_EVENT, callback)
    }
})

//把register返回值保存在dispatcherToken
CounterStore.dispatchToken = AppDispatcher.register((action)=>{
    console.log(action,'action')
    if(action.type === ActionTypes.INCREMENT){
        counterValues[action.counterCaption] ++;
        CounterStore.emitChange()
    }else if(action.type === ActionTypes.DECREMENT){
        counterValues[action.counterCaption] --;
        CounterStore.emitChange()
    }
})

export default CounterStore