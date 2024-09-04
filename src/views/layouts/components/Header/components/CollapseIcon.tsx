import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";


const CollapseIcon = (props: any) => {
	const { isCollapse, updateCollapse } = props;
	return (
		<div
			className="collapsed"
			onClick={() => {
				updateCollapse(!isCollapse);
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
		</div>
	);
};

export default CollapseIcon;
