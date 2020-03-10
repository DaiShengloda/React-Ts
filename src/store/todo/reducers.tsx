/**
 * 本质上是纯函数。接受旧的state、action，返回新的state；
 * reducer指定应用状态如何响应action，并更新到state；
 */
import { 
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO
} from './actions'

// 定义state基本结构
interface InitialState {
    visibilityFilter: string
    todos: []
}

// 更新todo的reducer
interface TodoFace {
    text: string
    completed: boolean
}
function todoHandle(state = [], action: any) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo: TodoFace, index) => {
                if(index===action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

// 更新filter的reducer
const { SHOW_ALL } = VisibilityFilters
function visibilityFilter(state = SHOW_ALL, action: any) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state;
    }
}

/**
 * 每次dispatch都会在每个子reducer中进行调用，然后合并成state
 */
const reducers = {
    visibilityFilter,
    todos: todoHandle
}

export default reducers