import { Navigate, useRoutes } from "react-router-dom"
import Login from "../views/login/index"
import Register from "../views/register"
import Index from "@/views/index/index"
import Depts from "@/views/depts/depts"
import Emps from "@/views/depts/emps"
import Upload from "@/views/upload/index"
import LayoutIndex from "@/views/layouts/index"

import Roles from "@/views/permissions/roles"

export interface MetaProps {
	keepAlive?: boolean
	requiresAuth?: boolean
	title: string
	key?: string
}

export interface RouteObject {
	caseSensitive?: boolean
	children?: RouteObject[]
	element?: React.ReactNode
	// index?: boolean | undefined;
	path?: string
	meta?: MetaProps
	isLink?: string
}

// * 导入所有router
// const metaRouters = import.meta.globEager("./modules/*.tsx");
// const metaRouters = import.meta.glob("./modules/*.tsx")

// // * 处理路由
// export const routerArray: RouteObject[] = []
// Object.keys(metaRouters).forEach((item) => {
// 	Object.keys(metaRouters[item]).forEach((key: any) => {
// 		routerArray.push(...metaRouters[item][key])
// 	})
// })

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />,
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login",
		},
	},
	{
		path: "/register",
		element: <Register />,
		meta: {
			requiresAuth: false,
			title: "注册页",
			key: "register",
		},
	},
	{
		element: <LayoutIndex />,
		meta: {
			title: "渠道管理",
		},
		children: [
			{
				path: "/home",
				element: <Index />,
				meta: {
					requiresAuth: true,
					title: "线索管理",
					key: "clueManager",
				},
			},
		],
	},
	{
		element: <LayoutIndex />,
		meta: {
			title: "部门管理",
		},
		children: [
			{
				path: "/depts/depts",
				element: <Depts />,
				meta: {
					requiresAuth: true,
					title: "线索管理",
					key: "/depts/depts",
				},
			},
			{
				path: "/depts/emps",
				element: <Emps />,
				meta: {
					requiresAuth: true,
					title: "线索管理",
					key: "/depts/emps",
				},
			},
		],
	},
	{
		element: <LayoutIndex />,
		meta: {
			title: "权限管理",
		},
		children: [
			{
				path: "/permissions/roles",
				element: <Roles />,
				meta: {
					requiresAuth: true,
					title: "权限管理1",
					key: "/permissions/roles",
				},
			},
		],
	},
	// {
	//     path: "/home",
	//     element: <Index />,
	//     meta: {
	//         requiresAuth: false,
	//         title: "首页",
	//         key: "home"
	//     }
	// },
	{
		path: "/upload",
		element: <Upload />,
		meta: {
			requiresAuth: false,
			title: "上传",
			key: "upload",
		},
	},
	{
		path: "*",
		element: <Navigate to="/404" />,
	},
]

const Router = () => {
	const routes = useRoutes(rootRouter)
	return routes
}

export default Router
