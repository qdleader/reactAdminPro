import http, { baseUrl } from "../index"
import { User } from "../interface"

/**
 * @name 用户模块
 */
// 添加
export const articlesAdd = (params: User.ReqUserAdd) => {
  return http.post<any>(`${baseUrl}/articles`, params, { headers: { showLoading: true } })
}
// 编辑
export const deptsEdit = (params: User.ReqUserAdd) => {
  return http.put<User.ResUserAdd>(`${baseUrl}/depts`, params, { headers: { showLoading: true } })
}
export const articlesList = (params: User.ReqUserList) => {
  return http.get<any>(`${baseUrl}/articles`, params, { headers: { showLoading: true } })
}
export const articlesInfo = (id: number) => {
  return http.get<any>(`${baseUrl}/articles/${id}`, {}, { headers: { showLoading: true } })
}
export const deptsDelete = (id: number) => {
  return http.delete<User.ResUserList>(`${baseUrl}/depts/${id}`, {}, { headers: { showLoading: true } })
}

