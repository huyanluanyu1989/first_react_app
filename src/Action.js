import * as ActionTypes from './ActionTypes'
// import AppDispatcher from './AppDispatcher'

// export const increment = (counterCaption) => {
//     AppDispatcher.dispatch({
//         type: ActionTypes.INCREMENT,
//         counterCaption: counterCaption
//     })
// }

// export const decrement = (counterCaption) => {
//     AppDispatcher.dispatch({
//         type: ActionTypes.DECREMENT,
//         counterCaption: counterCaption
//     })
// }

export const increment = (counterCaption) => {
    //Redux返回一个action 对象
   return {
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    }
}

export const decrement = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    }
}