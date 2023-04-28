import http, { baseUrl } from "../index"
import { User } from "../interface"

/**
 * @name 用户模块
 */
// 添加
export const deptsAdd = (params: User.ReqUserAdd) => {
  return http.post<User.ResUserAdd>(`${baseUrl}/depts`, params, { headers: { showLoading: true } })
}
// 编辑
export const deptsEdit = (params: User.ReqUserAdd) => {
  return http.put<User.ResUserAdd>(`${baseUrl}/depts`, params, { headers: { showLoading: true } })
}
export const deptsList = (params: User.ReqUserList) => {
  return http.get<any>(`${baseUrl}/depts`, params, { headers: { showLoading: true } })
}
export const deptsInfo = (id: number) => {
  return http.get<any>(`${baseUrl}/depts/${id}`, {}, { headers: { showLoading: true } })
}
export const deptsDelete = (id: number) => {
  return http.delete<User.ResUserList>(`${baseUrl}/depts/${id}`, {}, { headers: { showLoading: true } })
}

