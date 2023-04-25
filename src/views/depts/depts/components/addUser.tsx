import { Form, Input, Modal } from "antd"
import React from "react"
import { useEffect } from "react"

interface Values {
	id?: string
	currentDeptName: string
}

interface CollectionCreateFormProps {
	open: boolean
	currentId: number
	name: string
	onCreate: (values: Values) => void
	onEdit: (values: Values) => void
	onCancel: () => void
}

const addUser = (props: CollectionCreateFormProps) => {
	const { open, currentId, name, onCreate, onEdit, onCancel } = props
	const [form] = Form.useForm()

	const submitForm = () => {
		form.validateFields()
			.then((values) => {
				form.resetFields()
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

	useEffect(() => {
		form.setFieldsValue({ name: name })
	}, [name])
	return (
		<Modal open={open} title={currentId ? "编辑" : "添加" + "部门"} okText="确定" cancelText="取消" onCancel={onCancel} onOk={submitForm}>
			<Form form={form} layout="vertical" name="form_in_modal">
				<Form.Item name="name" label="部门名称" rules={[{ required: true, message: "不能为空" }]}>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default addUser
