import { userAdd, userDelete, userEdit } from "@/http/modules/user"
import { deptsAdd, deptsDelete, deptsEdit, deptsInfo, deptsList } from "@/http/modules/depts"
import { Button } from "antd"
import { useState, useEffect } from "react"
import { Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import AddUser from "./components/addUser"
import { User } from "@/http/interface"
import { message } from "antd"
import SearchForm from "./components/searchForm"
import { ISearchRecordParams, weatherData } from "./interface"
import styles from "./index.module.scss"
import { weatherApi } from "@/http/modules/weather"

export default function Weather() {
	const [open, setOpen] = useState(false)
	const [currentId, setCurrentId] = useState(0)
	const [total, setTotal] = useState(0)
	const [name, setName] = useState<any>("")
	const [searchParams, setSearchParams] = useState<ISearchRecordParams>({})
	const [data, setData] = useState<any>({})

	const [dataWeather, setDataWeather] = useState<any[]>([])

	const columns: ColumnsType<User.ResUserListItem> = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name",
			width: 100,
			render: (text) => <>{text}</>,
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
			title: "操作",
			key: "action",
			render: (_, record) => (
				<Space size="middle">
					<Button onClick={() => lineEdit(record.id)}>编辑</Button>
					<Button onClick={() => lineDelete(record.id)}>删除</Button>
				</Space>
			),
		},
	]

	const onCreate = async (values: any) => {
		console.log("Received values of form: ", values)

		let data = await deptsAdd(values)
		message.success("添加成功")
		setOpen(false)
		getList()
	}
	const onEdit = async (values: any) => {
		console.log("编辑", values)
		let data = await deptsEdit(values)
		setOpen(false)
		message.success("编辑成功")
		getList()
		console.log("编辑返回内容", data)
	}
	const getList = async () => {
		let data = await deptsList(searchParams)
		console.log("data", data)
		data?.data?.rows?.map((item: any) => {
			item.key = item.id
		})

		setData(data?.data?.rows)
		setTotal(data?.data?.total)
	}
	const lineEdit = async (id: number) => {
		console.log(id)
		setCurrentId(id)
		setOpen(true)
		let data = await deptsInfo(id)
		// message.success("删除成功")
		// getList()
		setName(data?.data?.name)
	}
	const lineDelete = async (id: number) => {
		console.log(id)
		let data = await deptsDelete(id)
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

	const getWeather = async () => {
		let res: any = await weatherApi()
		setDataWeather(res?.data?.forecasts[0].casts)
		console.log(111, res)
		console.log(222, res?.forecasts[0].casts)
	}
	const getWeather1 = async () => {
		// let res: any = await weatherApi1()
		// setDataWeather(res?.forecasts[0].casts)
		// console.log(111, res)
		// console.log(222, res?.forecasts[0].casts)
	}
	useEffect(() => {
		getWeather()
		getWeather1()
		getList()
	}, [searchParams])

	return (
		<div className={styles.weatherBox}>
			{dataWeather.map(
				(item, index) => (
					<div key={index} className={styles.weatherBoxItem}>
						<img src={weatherData[item.dayweather]}></img>
						<div>天气: {item.dayweather}</div>
						<div>
							日期：{item.date} 星期{item.week}
						</div>
						<div>
							温度：{item.nighttemp} - {item.daytemp}
						</div>
					</div>
				)

				// <img src={weatherData?[item.type + ""]} alt="" />
			)}
			{/* <img src={weatherData} alt="" v-if="item.type == '中雨'" /> */}
		</div>
	)
}
