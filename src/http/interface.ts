export namespace Login {
	export interface ReqLoginForm {
		username: string
		password: string
	}
	export interface ResLogin {
		access_token: string
		userName: string
		officeName: string
		userAvatar: string
	}
	export interface ResAuthButtons {
		[propName: string]: any
	}
}
