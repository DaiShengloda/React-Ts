/**
 * middleWare
 * store中任何被执行的action都会经历middleWare
 */

export const logger = (store: any) => (next: any) => (action: any) => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}