export namespace Login {
	export interface ReqLoginForm {
		username: string
		password: string
	}
	export interface ResLogin {
		access_token: string
		token: string
		userName: string
		officeName: string
		userAvatar: string
	}
	export interface ResLoginType {
		token: string
	}
	export interface ResAuthButtons {
		[propName: string]: any
	}
}
export namespace UploadState {
	export interface UploadFile {
		file: any
	}
}
