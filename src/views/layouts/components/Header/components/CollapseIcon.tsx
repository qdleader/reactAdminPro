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

// const mapStateToProps = (state: any) => state.menu;
// const mapDispatchToProps = { updateCollapse };
// export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon);

export default CollapseIcon;
