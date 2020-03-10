/**
 * actions本质上是js对象；
 * actions创建函数是生成action的方法；
 */


 /*
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}  

/**
 * action 创建函数
 * dispatch可在创建函数内部调用，也可在外部调用
 */
export function addTodo(text: string) {
    return (dispatch: any) => {
        dispatch({ type: 'ADD_TODO', text })
    }
}

export function toggleTodo(index: number) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: string) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
    