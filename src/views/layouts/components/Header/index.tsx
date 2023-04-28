import { Layout } from "antd"
import CollapseIcon from "./components/CollapseIcon"
import "./index.less"

const LayoutHeader = () => {
	const { Header } = Layout

	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
				{/* <BreadcrumbNav /> */}
			</div>
			<div className="header-ri">
				{/* <AssemblySize /> */}
				{/* <AssemblySize />
				<Language />
				<Theme /> */}
				{/* <Fullscreen /> */}
				{/* <span className="username">Alpha</span> */}
				{/* <AvatarIcon /> */}
			</div>
		</Header>
	)
}

export default LayoutHeader
