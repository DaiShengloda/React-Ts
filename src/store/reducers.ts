import { Global } from './interface'
import { InitGlobalState } from './initState'

function global(state: Global, action: any) {
    switch(action.type) {
        case 'SET_GLOBAL_STATE':
            return action.data
        default:
            return InitGlobalState
    }
}


const reducers = {
    global,
}

export default reducers