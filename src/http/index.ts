import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { message } from "antd"
import { hideLoading, showLoading } from "../components/BasicLoading"



const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间（10s）
	timeout: 10000,
	// 跨域时候允许携带凭证
	// withCredentials: true,
}

export const baseUrl = 'http://39.105.192.202:5627'
// export const baseUrl = 'http://localhost:5627'
export interface Result {
	code: string
	token: string
	resultMsg: string
}
export interface ResultData<T = any> extends Result {
	data?: T
}
export const checkStatus = (status: number): void => {
	switch (status) {
		case 400:
			message.error("请求失败！请您稍后重试")
			break
		case 401:
			message.error("登录失效！请您重新登录")
			break
		case 403:
			message.error("当前账号无权限访问！")
			break
		case 404:
			message.error("你所访问的资源不存在！")
			break
		case 405:
			message.error("请求方式错误！请您稍后重试")
			break
		case 408:
			message.error("请求超时！请您稍后重试")
			break
		case 500:
			message.error("服务异常！")
			break
		case 502:
			message.error("网关错误！")
			break
		case 503:
			message.error("服务不可用！")
			break
		case 504:
			message.error("网关超时！")
			break
		default:
			message.error("请求失败！")
	}
}

class RequestHttp {
	service: AxiosInstance
	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config)
		this.service.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				config.headers?.showLoading && showLoading()
				const token = sessionStorage.getItem("token");
				return { ...config, headers: { token, ...config.headers } }
			},
			(error: AxiosError) => {
				return Promise.reject(error)
			}
		)
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				hideLoading()
				const { data, config } = response
				console.log("data", data);
				if (data.code && data.code !== 200 && data.code !== 1) {
					message.error(data.msg)
					return Promise.reject(data)
				}
				return data
			},
			async (error: AxiosError) => {
				hideLoading()
				const { response } = error
				if (error.message.indexOf("timeout") !== -1) message.error("请求超时，请稍后再试")
				if (response) checkStatus(response.status)
				if (!window.navigator.onLine) window.location.hash = "/500"
				return Promise.reject(error)
			}
		)
	}

	// * 常用请求方法封装
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object })
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object)
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object)
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object })
	}
}

export default new RequestHttp(config)
