import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { selectSubreddit, fetchPostsIfNeeded } from './ware/actions'
import { addTodo } from './todo/actions'
import TodoReducers from './todo/reducers'
import WareReducers from './ware/reducers'
import { logger } from '../middleWare'

const rootReducer = combineReducers(
    Object.assign({}, TodoReducers,WareReducers)
)

const loggerMiddleware = createLogger()

/**
 * createStore(reducer, rootState)
 * reducer
 * 初始化state
 */
const store = createStore(
  rootReducer,
  applyMiddleware(  // 支持异步actions
    thunkMiddleware, // 允许我们 dispatch() 函数
    // loggerMiddleware, // 一个很便捷的 middleware，用来打印 action 日志
    // logger
  )
)

store.dispatch(addTodo('学习react'))
// store.dispatch(selectSubreddit('reactjs'))
// store
//   .dispatch(fetchPostsIfNeeded('reactjs'))
//   .then(() => console.log(store.getState())
// )
export default store