import { Login } from "../interface"
import http, { baseUrl } from "../index"



export const weatherApi = () => {
	return http.get<any>(`${baseUrl}/weather`)
}



