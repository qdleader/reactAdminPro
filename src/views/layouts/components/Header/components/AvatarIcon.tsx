import { Avatar, Modal, Dropdown, message, MenuProps } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import { setToken } from "@/redux/modules/global/action";

import avatar from "@/assets/images/avatar.png";
// import { LOCAL_USER_INFO } from "@/constants";

const AvatarIcon = (props: any) => {
	const baseDomain = import.meta.env.VITE_API_DOMAIN_PAN;
	const [modal, contextHolder] = Modal.useModal();
	const { setToken } = props;
	const navigate = useNavigate();
	const userStr = localStorage.getItem('LOCAL_USER_INFO');
	const userInfo = userStr ? JSON.parse(userStr) : {};

	// 退出登录
	const logout = () => {
		modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				setToken("");
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};

	const onClick = (e: MenuInfo) => {
		if (e.key == "3") {
			window.location = baseDomain;
		} else if (e.key == "4") {
			logout();
		}
	};
	const items: MenuProps["items"] = [
		{
			label: <span className="dropdown-item">切换系统</span>,
			key: "3"
		},
		{
			label: <span className="dropdown-item">退出登录</span>,
			key: "4"
		}
	];
	return (
		<>
			{contextHolder}
			<span className="avatar-username">{userInfo?.name}</span>
			<Dropdown menu={{ items, onClick }} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={userInfo?.headUrl || avatar} />
			</Dropdown>
		</>
	);
};

// const mapDispatchToProps = { setToken };
// export default connect(null, mapDispatchToProps)(AvatarIcon);

export default AvatarIcon
