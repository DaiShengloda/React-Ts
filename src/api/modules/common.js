import mainConfig from '../config/main'
import qs from 'qs'

export default {
	get(data) {
		let serverConfig = {
			url: data.url,
			method: 'get',
			params: qs.stringify(
				Object.assign({}, data.params, {
					t: Date.now(),
				}),
				{
					indices: false,
				}
			),
		}
		return this.getData(Object.assign({}, mainConfig, serverConfig))
	},

	post(data) {
		let serverConfig = {
			url: data.url,
			method: 'post',
			data: data.params, // qs.stringify(data.params)
		}
		return this.getData(Object.assign(mainConfig, serverConfig))
	},

	put(data) {
		let serverConfig = {
			url: data.url,
			method: 'put',
			data: data.params, // qs.stringify(data.params)
		}

		return this.getData(Object.assign(mainConfig, serverConfig))
	},

	delete(data) {
		let serverConfig = {
			url: data.url,
			method: 'delete',
			data: qs.stringify(data.params),
		}
		return this.getData(Object.assign(mainConfig, serverConfig))
	},
}
