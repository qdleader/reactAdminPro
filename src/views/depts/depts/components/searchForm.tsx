import { Button, Form, Input, Select } from "antd";
import { ISearchRecordParams } from "../interface";
const { Item } = Form;


export interface SearchFormProps {
	searchData: (searchParams: ISearchRecordParams, pageNo: number) => void;
}
const SearchForm = (props: SearchFormProps) => {
	const { searchData } = props;
	const [form] = Form.useForm();

	const handleSearch = (values: any) => {
		console.log("表单信息---->", values);
		const { name, status } = values;
		const searchParams: ISearchRecordParams = {
			name,
		};
		searchData(searchParams, 1);
	};

	const handleReset = () => {
		form.resetFields();
		handleSearch(form.getFieldsValue());
	};

	return (
		<div className="record-search-form-wrap">
			<Form form={form} autoComplete="off" layout="inline" onFinish={handleSearch}>
				<Item name="name">
					<Input placeholder="请输入姓名" maxLength={20} />
				</Item>
				<Item>
					<Button type="primary" htmlType="submit" className="form-btn-search">
						搜索
					</Button>
					<Button type="primary" onClick={handleReset}>
						重置
					</Button>
				</Item>
			</Form>
		</div>
	);
};

export default SearchForm;
