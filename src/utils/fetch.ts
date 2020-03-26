import Axios, { AxiosRequestConfig, CancelTokenSource } from 'axios'
import config from '../config/domain'
import { createHashHistory } from 'history';

const instance = Axios.create({
    baseURL: `${config.env.REACT_APP_URL}` + (config.isDevelopment ? '/public' : ''),
    timeout: 400000,
    withCredentials: false,
    validateStatus: function (status) {
        return status >= 200 && status < 500 // && status < 300 // default
    },
})

instance.interceptors.request.use(
    function (config) {
        return config
    },
    function () {
        return Promise.reject('数据发送失败，请检查网络配置')
    }
)

instance.interceptors.response.use(
    // 响应成功
    function (response) {
        try {
            if (response.data.success) {
                return response.data
            } else if (
                response.data.error_code === 401 ||
                response.data.error_code === 403
            ) {
                // cookie失效时跳转到登录页面
                const history = createHashHistory();
                setTimeout(function() {
                    history.push('/login');
                }, 300)
                return Promise.reject(response.data)
            } else {
                return Promise.reject(response.data)
            }
        } catch (e) {
            return Promise.reject(e)
        }
    }, 
    // 响应失败
    function (e) {
        return Promise.reject({
            // error_text: '网络错误：' + e
            error_text: '网络不可用，请检查网络设置'
        })
    }
)

export function autoCancelPrePendingFetch (fn: (config: AxiosRequestConfig) => Promise<unknown>) {
    let source: CancelTokenSource | null = null
    // 重复执行下面的函数
    return function (config?: AxiosRequestConfig) {
        source && source.cancel('取消上次请求')
        source = Axios.CancelToken.source()
        return fn(Object.assign({}, config || {}, {cancelToken: source.token}))
    }
}

export default instance