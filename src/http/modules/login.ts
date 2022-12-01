import http from "../index"
import { Login } from "../interface"

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(`/login`, {}, { headers: { showLoading: true } })
}

export const listApi = (params: Login.ReqLoginForm) => {
	return http.get<Login.ResLogin>(`/list`)
}
