export namespace Login {
	export interface ReqLoginForm {
		username: string
		password: string
	}
	export interface ReqRegisterForm {
		username: string
		password: string
		email: string
		code: number
	}
	export interface ReqEmailForm {
		email: string
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

export namespace User {
	export interface ReqUserAdd {
		access_token: string
		token: string
		userName: string
		officeName: string
		userAvatar: string
	}
	export interface ReqUserList {
		name?: string
	}
	export interface ResUserAdd {
		data: string
	}
	export interface ResUserListItem {
		key?: string;
		id: number;
		createTime: string;
		address: number;
		description: string;
		hobby: string;
	}
	export interface ResUserList {
		data: ResUserListItem[]
		rows: ResUserListItem[]
		total: number
		page: number
	}
}



export namespace Role {
	export interface ReqRoleAdd {
		name: string
	}
	export interface ReqRoleList {
		page: number
		pageSize: number
		name?: string
	}
	export interface ResUserAdd {
		data: string
	}
	export interface ResUserListItem {
		key?: string;
		id: number;
		createTime: string;
		address: number;
		description: string;
		hobby: string;
	}
	export interface ResUserList {
		data: ResUserListItem[]
		rows: ResUserListItem[]
		total: number
		page: number
	}
}

