import http from "../index"
import { Login, User } from "../interface"

/**
 * @name 用户模块
 */
// 添加
export const userAdd = (params: User.ReqUserAdd) => {
  return http.post<User.ResUserAdd>(`/api/user/add`, params, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}
// 编辑
export const userEdit = (params: User.ReqUserAdd) => {
  return http.put<User.ResUserAdd>(`/api/user/edit`, params, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}
export const userList = (params: User.ReqUserList) => {
  return http.get<any>(`/api/user/list`, params, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}
export const userDelete = (id: number) => {
  return http.delete<User.ResUserList>(`/api/user/delete/${id}`, {}, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}

