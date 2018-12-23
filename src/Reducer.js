import * as ActionTypes from './ActionTypes'

export default (state, action) => {
    const {counterCaption} = action
    /**
     * return {...state,[counterCaption] : state[counterCaption] + 1}等同于
     * const newState = Object.assign({},state)
     * newState[counterCaption] ++
     * return newState
     */
    switch (action.type) {
        case ActionTypes.INCREMENT:
        //...操作符，表示把state所有字段扩展开
            return {...state,[counterCaption] : state[counterCaption] + 1}
        case ActionTypes.DECREMENT:
            return { ...state, [counterCaption]: state[counterCaption] - 1 }
        default:
            return state
    }
}