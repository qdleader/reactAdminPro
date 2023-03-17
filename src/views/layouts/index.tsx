import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import LayoutMenu from "./components/Menu";
import LayoutHeader from "./components/Header";
import LayoutFooter from "./components/Footer";
import "./index.less";

const LayoutIndex = (props: any) => {
	const { Sider, Content } = Layout;
	const { isCollapse, updateCollapse } = props;




	return (
		// 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
		<section className="container">
			<Sider trigger={null} collapsed={props.isCollapse} width={240} theme="light">
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				{/* <LayoutTabs></LayoutTabs> */}
				<Content>
					<Outlet></Outlet>
				</Content>
				<LayoutFooter></LayoutFooter>
			</Layout>
		</section>
	);
};

export default LayoutIndex

// const mapStateToProps = (state: any) => state.menu;
// const mapDispatchToProps = { setAuthButtons, updateCollapse };
// export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);
