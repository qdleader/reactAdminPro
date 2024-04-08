import http, { baseUrl } from "../index"


export const musicApi = () => {
	return http.get<any>(`${baseUrl}/music`)
}



