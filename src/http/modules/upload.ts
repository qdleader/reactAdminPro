import { Login, UploadState } from "../interface"
import http, { baseUrl } from "../index"

/**
 * @name 上传
 */

export const uploadApi = (file: FormData) => {
  return http.post<Login.ResLoginType>(`${baseUrl}/upload`, file, { headers: { showLoading: true } })
  // return http.post<Login.ResLoginType>(`http://localhost:5627/upload`, file, { headers: { showLoading: true } })
  // return http.post<Login.ResLogin>(`https://admin-api-cy1w.onrender.com/api/user/login`, params, { headers: { showLoading: true } })
}



