import myFetch from '../api/index'
const Fetch: any = new myFetch()

export const getHomeData: any = (params: any) => {
    return Fetch.post({
        url: '/boss/home',
        params: params
    })
}