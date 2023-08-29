import { userAdd, userDelete, userEdit } from "@/http/modules/user"
import { empsAdd, empsDelete, empsEdit, empsList } from "@/http/modules/emps"

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

	const [total, setTotal] = useState(0)
	const [name, setName] = useState("")

	const [data, setData] = useState<User.ResUserListItem[]>([])

	const columns: ColumnsType<User.ResUserListItem> = [
		{
			title: "id",
			dataIndex: "id",
			key: "id",
			render: (text) => <>{text}</>,
		},
		{
			title: "姓名",
			dataIndex: "name",
			key: "name",
			width: 100,
			render: (text) => <>{text}</>,
		},
		{
			title: "图片",
			dataIndex: "image",
			key: "image",
			width: 100,
			render: (text) => (
				<>
					<img width={30} height={30} src={text} alt="" />
				</>
			),
		},
		{
			title: "创建时间",
			dataIndex: "createTime",
			key: "createTime",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "创建时间",
			dataIndex: "createTime",
			key: "createTime",
			render: (text) => <>{text}</>,
		},
		{
			title: "账号",
			dataIndex: "username",
			key: "username",
		},
		{
			title: "性别",
			dataIndex: "createTime",
			key: "createTime",
			render: (text) => (
				<>
					{text == 1 ? (
						<Tag bordered={false} color="volcano">
							男
						</Tag>
					) : (
						<Tag bordered={false} color="orange">
							女
						</Tag>
					)}
				</>
			),
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

		let data = await empsAdd(values)
		setOpen(false)
		getList()
	}
	const onEdit = async (values: any) => {
		console.log("编辑", values)
		let data = await empsEdit(values)
		setOpen(false)
		message.success("编辑成功")
		getList()
		console.log("编辑返回内容", data)
	}
	const getList = async () => {
		let data = await empsList(searchParams)
		data?.data?.rows?.map((item: any) => {
			item.key = item.id
		})
		console.log("emps-list", data)
		setData(data?.data?.rows)
		setTotal(data?.data?.total)
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
		let data = await empsDelete(id)
		message.success("删除成功")
		getList()
		console.log("userDelete", data)
	}
	const handleSearch = async (searchRecordParams: ISearchRecordParams, pageNo: number) => {
		setSearchParams(searchRecordParams)
	}
	const handleChangePage = (page: number, size: number) => {
		setSearchParams({ ...searchParams, page, pageSize: size })
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
			<Table
				columns={columns}
				pagination={{ total: total, pageSize: 10, onChange: handleChangePage, showSizeChanger: false }}
				dataSource={data}
			/>
		</div>
	)
}
