import { message } from 'antd';

const baseUrl = '/'
console.log(baseUrl)
// 401 未登录 403 无权限
export default {
	// `url` is the server URL that will be used for the request
	url: '',

	// `method` is the request method to be used when making the request
	method: 'post', // default

	// `baseURL` will be prepended to `url` unless `url` is absolute.
	// It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
	// to methods of that instance.
	baseURL: baseUrl,

	reqInterceptor: [
		function(config) {
			// Do something before request is sent
			// console.log('发送的数据', config)
			return config
		},
		function() {
			// Do something with request error
			console.error('数据发送失败，检查网络配置')
			return Promise.reject('数据发送失败，检查网络配置')
		},
	],

	repInterceptor: [
        // res响应处理
		function(response) {
			try {
				if (response.data.success) {
					return response.data
				} else if (
					response.data.error_code === 401 ||
					response.data.error_code === 403 ||
					response.data.error_code === 4031 ||
					response.data.error_code === 4032
				) {
                    // cookie失效后退出到登录页
                    message.error(response.data.error_text)
					return Promise.reject(response.data)
				} else {
					return Promise.reject(response.data)
				}
			} catch (e) {
				return Promise.reject(e)
			}
        },
        
        // 断网处理
		function(e) {
            let error_data = {}
             if(!e.response) {
                error_data.error_text = '网络不可用，请检查网络设置'
                error_data.error_code = 50001  // 前端定义断网错误码
             }else {
                error_data.error_text = '网络错误: ' + e
             }
			return Promise.reject(error_data)
        },  
    ],
    
	paramsSerializer: function(params) {
		return params
	},

	timeout: 400000,
	withCredentials: false,
	responseType: 'json', 
	responseEncoding: 'utf8',

	// rejected.
	validateStatus: function(status) {
		return status >= 200 && status < 500 // && status < 300 // default
	},
}
