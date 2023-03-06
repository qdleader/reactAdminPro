import http from "../index"
import { Login, UploadState } from "../interface"

/**
 * @name 上传
 */

export const uploadApi = (file: FormData) => {
  return http.post<Login.ResLoginType>(`/api/upload`, file, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}



