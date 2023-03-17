import http from "../index"
import { Login, User } from "../interface"

/**
 * @name 用户模块
 */

export const userAdd = (params: User.ReqUserAdd) => {
  return http.post<User.ResUserAdd>(`/api/user/add`, params, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}

