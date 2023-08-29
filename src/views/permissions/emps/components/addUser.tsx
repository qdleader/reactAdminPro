import { Form, Input, Modal, Radio, Select, Upload, UploadProps } from "antd"
import React, { useState } from "react"
import { message } from "antd"
import { useEffect } from "react"

import type { UploadChangeParam } from "antd/es/upload"
import type { RcFile, UploadFile } from "antd/es/upload/interface"
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons"
import { uploadApi } from "@/http/modules/upload"
import { empsInfo } from "@/http/modules/emps"

interface Values {
	id?: string
	title: string
	username: string
	address: string
	hobby: string
}

interface CollectionCreateFormProps {
	open: boolean
	currentId: number
	onCreate: (values: Values) => void
	onEdit: (values: Values) => void
	onCancel: () => void
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
	const reader = new FileReader()
	reader.addEventListener("load", () => callback(reader.result as string))
	reader.readAsDataURL(img)
}

const addUser = (props: CollectionCreateFormProps) => {
	const { open, currentId, onCreate, onEdit, onCancel } = props

	const [loading, setLoading] = useState(false)
	const [imageUrl, setImageUrl] = useState<any>()

	const [form] = Form.useForm()

	const submitForm = () => {
		form.validateFields()
			.then((values) => {
				values.image = imageUrl
				// form.resetFields()
				if (currentId) {
					onEdit({ ...values, id: currentId })
				} else {
					onCreate(values)
				}
			})
			.catch((info) => {
				console.log("Validate Failed:", info)
			})
	}

	const beforeUpload = async (file: RcFile) => {
		// if (imgLoading) return false;
		// 限制文件大小 10MB
		if (file && file?.size >= 10 * 1024 * 1024) {
			message.error("图片限制大小10MB，上传失败")
			return false
		}
		setLoading(true)
		const formData = new FormData()
		formData.append("image", file)
		const { data } = await uploadApi(formData).finally(() => {
			setLoading(false)
		})
		console.log("上传图片", data)
		setImageUrl(data || "")
		form.setFieldValue("image", data)
		return false
	}

	const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
		if (info.file.status === "uploading") {
			setLoading(true)
			return
		}
		if (info.file.status === "done") {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj as RcFile, (url) => {
				setLoading(false)
				setImageUrl(url)

				// setImageUrl(url)
				// form.setFieldValue("image", url)
			})
		}
	}
	const getInfo = async (currentId: number) => {
		let data = await empsInfo(currentId)
		console.log("datainfo", data)
		const { name, gender, username, password, job, image, deptId, id } = data.data
		form.setFieldsValue({
			name: name,
			gender: gender + "",
			username: username,
			password: password,
			job: job,
			image: image,
			deptId: deptId,
			id: id,
		})
		setImageUrl(image)
	}
	useEffect(() => {
		if (open && currentId) {
			getInfo(currentId)
		}
	}, [open])
	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	)

	return (
		<Modal open={open} title="Create a new collection" okText="Create" cancelText="Cancel" onCancel={onCancel} onOk={submitForm}>
			<Form form={form} layout="vertical" name="form_in_modal" initialValues={{ modifier: "public" }}>
				<Form.Item name="name" label="姓名" rules={[{ required: true, message: "不能为空" }]}>
					<Input />
				</Form.Item>
				<Form.Item name="username" label="账号名" rules={[{ required: true, message: "不能为空" }]}>
					<Input type="textarea" />
				</Form.Item>
				<Form.Item
					name="password"
					label="工作"
					className="collection-create-form_last-form-item"
					rules={[{ required: true, message: "不能为空" }]}
				>
					<Input type="textarea" />
				</Form.Item>
				<Form.Item label="工作" name="job">
					<Select>
						<Select.Option value="1" key={1}>
							市场部
						</Select.Option>
						<Select.Option value="2" key={2}>
							运营部
						</Select.Option>
						<Select.Option value="3" key={3}>
							产品部
						</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item
					name="password"
					label="密码"
					className="collection-create-form_last-form-item"
					rules={[{ required: true, message: "不能为空" }]}
				>
					<Input type="textarea" />
				</Form.Item>
				<Form.Item label="性别" name="gender">
					<Radio.Group>
						<Radio value="1"> 男 </Radio>
						<Radio value="2"> 女 </Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="头像" name="image">
					<Upload
						name="avatar"
						listType="picture-circle"
						className="avatar-uploader"
						showUploadList={false}
						beforeUpload={beforeUpload}
						onChange={handleChange}
					>
						{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
					</Upload>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default addUser
