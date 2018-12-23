import {createStore} from 'redux'
import reducer from './Reducer'

const initValues = {
    'First' : 0,
    'Second' : 10,
    'Third' : 20
}
//第一个参数代表更新状态，第二个参数代表初始状态，第三个参数Store Enhancer，暂时用不上
const store = createStore(reducer, initValues)

export default store
