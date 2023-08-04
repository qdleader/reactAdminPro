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

export const weatherApi = () => {
	return http.get<any>(`/myweather/v3/weather/weatherInfo?extensions=all&city=110105&key=e6f2b10a83287c163dd26fd868c23b9d`)
}
export const weatherApi1 = () => {
	return http.get<any>(`https://restapi.amap.com/v3/weather/weatherInfo?extensions=all&city=110105&key=e6f2b10a83287c163dd26fd868c23b9d`)
}


