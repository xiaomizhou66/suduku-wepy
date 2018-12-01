import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload // 传进来的参数
    }
  }
}, {
  num: 0,
  asyncNum: 0
})

/* const defaultState  = {
  num: 0 ,
  asyncNum: 0
}
最后一个默认状态可以这样写defaultState 。然像上面这样开始就定义 */
