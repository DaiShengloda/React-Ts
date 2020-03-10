import Axios from 'axios'
import common from './modules/common'
const modules = [common]
class Fetch {
	getData(config) {
		const instance = Axios.create(config)

		// 添加单次请求的拦截器
		instance.interceptors.request.use(...config.reqInterceptor)
		instance.interceptors.response.use(...config.repInterceptor)

		return instance(config).finally(e => {
			// console.log(e)
		})
	}
}

modules.forEach(_module => {
	for (let [fnName, fn] of Object.entries(_module)) {
		Fetch.prototype[fnName] = fn
	}
})

const myFetch = new Fetch()
export default Fetch
