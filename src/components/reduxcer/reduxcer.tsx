import React from 'react'
import { createStore } from 'redux'
import { Button } from 'antd'

 /**
  * 一、reducer函数
  * reducer函数将state转换为state，形式是(state, action) => state
  *  counter函数将state转换为store中state
  */

  // 数字递增递减
function counter(state = 0, action: any) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
  

/**
 * 创建store来存放状态
 * store的api有{ subscribe, dispatch, getState }
 */
let store = createStore(counter)

// 手动订阅更新，也可以绑定数据到视图层
store.subscribe(() => {
    console.log(store.getState())
})


interface Props {

}
class Reduxcer extends React.Component<Props, object>{
    // constructor(props: Props) {
    //     super(props)
    // }

    handleIncrement = () => {
        // dispatch改变state状态
        store.dispatch({type: 'INCREMENT'})
    }

    handleDecrement = () => {
        store.dispatch({type: 'DECREMENT'})
    }

    render() {
        return (
            <div>
                <div>{store.getState()}</div>
                <Button onClick={this.handleIncrement}>增加</Button>
                <Button onClick={this.handleDecrement}>减少</Button>
            </div>
        )
    }
}

export default Reduxcer
