import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducers from './reducers'

// 根reduder
const rootReducer = combineReducers(
    Object.assign({}, reducers)
)

// 初始化store
const Store = createStore(
  rootReducer,
  applyMiddleware(  
    thunkMiddleware,
    createLogger(),
  )
)

export default Store