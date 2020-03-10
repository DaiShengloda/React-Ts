import myFetch from '../api/index'
const Fetch: any = new myFetch()

export const getGlobalparams = (params?: any) => {
    return Fetch.get({
        url: '/boss/api/globalparams'
    })
}