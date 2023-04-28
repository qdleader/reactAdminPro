import { userAdd, userDelete, userEdit, userList } from "@/http/modules/user"
import { Button } from "antd"
import { useState, useEffect } from "react"
import { Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import AddUser from "./components/addUser"
import { User } from "@/http/interface"
import { message } from "antd"
import SearchForm from "./components/searchForm"
import { ISearchRecordParams } from "./interface"
import styles from "./index.module.scss"

export default function index() {
	const [open, setOpen] = useState(false)
	const [currentId, setCurrentId] = useState(0)
	const [searchParams, setSearchParams] = useState<ISearchRecordParams>({})

	const [data, setData] = useState<any[]>([])

	const columns: ColumnsType<User.ResUserListItem> = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name",
			width: 100,
		},
		{
			title: "id",
			dataIndex: "id",
			key: "id",
			render: (text) => <>{text}</>,
		},
		{
			title: "创建时间",
			dataIndex: "createTime",
			key: "createTime",
			render: (text) => <>{text}</>,
		},
		{
			title: "更新时间",
			dataIndex: "updateTime",
			key: "updateTime",
			render: (text) => <>{text}</>,
		},
		{
			title: "爱好",
			dataIndex: "hobby",
			key: "hobby",
			render: (text) => <>{text}</>,
		},
		{
			title: "操作",
			key: "action",
			render: (_, record) => (
				<Space size="middle">
					{/* <a>Invite {record.hobby}</a> */}
					<Button onClick={() => lineEdit(record.id)}>编辑</Button>
					<Button onClick={() => lineDelete(record.id)}>删除</Button>
				</Space>
			),
		},
	]

	const onCreate = async (values: any) => {
		console.log("Received values of form: ", values)

		let data = await userAdd(values)
		setOpen(false)
		getList()
	}
	const onEdit = async (values: any) => {
		console.log("编辑", values)
		let data = await userEdit(values)
		setOpen(false)
		message.success("编辑成功")
		getList()
		console.log("编辑返回内容", data)
	}
	const getList = async () => {
		let data = await userList(searchParams)
		data?.data?.map((item: any) => {
			item.key = item.id
		})
		console.log("list", data)
		setData(data?.data)
	}
	const lineEdit = async (id: number) => {
		console.log(id)
		setCurrentId(id)
		setOpen(true)
		// let data = await userDelete(id)
		// message.success("删除成功")
		// getList()
		// console.log("lineEdit", data);
	}
	const lineDelete = async (id: number) => {
		console.log(id)
		let data = await userDelete(id)
		message.success("删除成功")
		getList()
		console.log("userDelete", data)
	}
	const handleSearch = async (searchRecordParams: ISearchRecordParams, pageNo: number) => {
		setSearchParams(searchRecordParams)
	}
	useEffect(() => {
		getList()
	}, [searchParams])

	return (
		<div>
			<div className={styles.searchBox}>
				<SearchForm searchData={handleSearch} />
			</div>
			<Button
				type="primary"
				className={styles.searchBtn}
				onClick={() => {
					setOpen(true)
					setCurrentId(0)
				}}
			>
				添加用户
			</Button>
			<AddUser
				open={open}
				onCreate={onCreate}
				onEdit={onEdit}
				currentId={currentId}
				onCancel={() => {
					setOpen(false)
				}}
			/>
			<Table columns={columns} dataSource={data} />
		</div>
	)
}
