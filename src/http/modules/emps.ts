import http, { baseUrl } from "../index"
import { Login, User } from "../interface"

/**
 * @name 用户模块
 */
// 添加
export const empsAdd = (params: User.ReqUserAdd) => {
  return http.post<User.ResUserAdd>(`${baseUrl}/emps`, params, { headers: { showLoading: true } })
  // return http.post<User.ResUserAdd>(`http://localhost:5627/emps`, params, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}
// 编辑
export const empsEdit = (params: User.ReqUserAdd) => {
  return http.put<User.ResUserAdd>(`${baseUrl}/emps`, params, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}
export const empsList = (params: User.ReqUserList) => {
  return http.get<any>(`${baseUrl}/emps`, params, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}
export const empsInfo = (id: number) => {
  return http.get<any>(`${baseUrl}/emps/${id}`, {}, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}
export const empsDelete = (id: number) => {
  return http.delete<User.ResUserList>(`${baseUrl}/emps/${id}`, {}, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}

