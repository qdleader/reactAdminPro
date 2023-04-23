import { Login } from "../interface"
import http, { baseUrl } from "../index"

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(`/login`, {}, { headers: { showLoading: true } })
}
// export const loginApi1 = (params: Login.ReqLoginForm) => {
// 	return http.post<Login.ResLoginType>(`/api/user/login`, params, { headers: { showLoading: true } })
// 	// return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
// }
export const loginApi1 = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLoginType>(`${baseUrl}/login`, params, { headers: { showLoading: true } })
	// return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}
// 注册
export const registerApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(`/api/user/register`, params, { headers: { showLoading: true } })
	// return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/register`, params, { headers: { showLoading: true } })
}

export const listApi = (params: Login.ReqLoginForm) => {
	return http.get<Login.ResLogin>(`https://admin-api-cy1w.onrender.com//list`)
}


