const MenuData = [
	// {
	// 	icon: "TeamOutlined",
	// 	title: "团队模块",
	// 	path: "/tenant",
	// 	isShowMenu: true,
	// 	close: true,
	// 	children: [
	// 		{
	// 			icon: "AppstoreOutlined",
	// 			path: "/home",
	// 			title: "人员管理",
	// 			close: true,
	// 			isShowMenu: true
	// 		},
	// 		{
	// 			// 添加新租户
	// 			icon: "AppstoreOutlined",
	// 			title: "添加新人员",
	// 			path: "/tenant/add",
	// 			close: false,
	// 			isShowMenu: false
	// 		},
	// 		{
	// 			// 租户配置
	// 			icon: "SettingOutlined",
	// 			title: "权限管理",
	// 			path: "/tenant/config",
	// 			close: true,
	// 			isShowMenu: true
	// 		}
	// 	]
	// },
	{
		icon: "ContainerOutlined",
		title: "部门管理",
		path: "/depts",
		isShowMenu: true,
		close: true,
		children: [
			{
				icon: "CustomerServiceOutlined",
				path: "/depts/depts",
				title: "部门管理",
				close: true,
				isShowMenu: true
			},
			{
				icon: "RobotOutlined",
				path: "/depts/emps",
				title: "人员管理",
				close: true,
				isShowMenu: true
			},
		]
	},
	{
		icon: "ContainerOutlined",
		title: "权限管理",
		path: "/permissions",
		isShowMenu: true,
		close: true,
		children: [
			{
				icon: "CustomerServiceOutlined",
				path: "/permissions/roles",
				title: "角色管理",
				close: true,
				isShowMenu: true
			}
		]
	},
	{
		icon: "ContainerOutlined",
		title: "生活助手",
		path: "/life",
		isShowMenu: true,
		close: true,
		children: [
			{
				icon: "CustomerServiceOutlined",
				path: "/life/weather",
				title: "天气预报",
				close: true,
				isShowMenu: true
			}
		]
	},
];

export default MenuData;
