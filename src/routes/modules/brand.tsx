import LayoutIndex from "@/views/layouts/index"
import { RouteObject } from "@/routes/interface"
import Emps from "@/views/depts/emps"

// 品牌搭建模块
const brandRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/brand",
				element: <Emps />,
				meta: {
					requiresAuth: true,
					title: "品牌搭建",
					key: "brand",
				},
			},
		],
	},
]

export default brandRouter
