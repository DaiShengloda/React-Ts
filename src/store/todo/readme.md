// /**
//  * 单一store
//  * 单向数据流
//  */
// import { createStore } from 'redux'
// import reducers from './reducers'
// import { addTodo } from './actions'

// // 创建store
// const Store = createStore(reducers)


// Store.dispatch(addTodo('学习React+TS'))

// // 注册监听器，并返回注销函数
// // state更新，打印日志
// const unSubscribe = Store.subscribe(() => {
//     console.log(Store.getState())
// })

// export default Store
