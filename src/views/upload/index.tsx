import React, { startTransition, useDeferredValue, useEffect, useState } from "react"
import { UploadOutlined } from "@ant-design/icons"
import { Button, message, Upload } from "antd"
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface"
import { uploadApi } from "@/http/modules/upload"

const App: React.FC = () => {
	const [fileList, setFileList] = useState<UploadFile[]>([])
	const [uploading, setUploading] = useState(false)

	const handleUpload = () => {
		console.log("fileList", fileList)
		const formData = new FormData()
		// fileList.forEach((file) => {
		//   formData.append('files[]', file as RcFile);
		// });
		formData.append("file", fileList[0] as RcFile)
		setUploading(true)
		console.log("formData", formData)
		uploadApi(formData)
			.then((res) => {
				console.log(111, res)
			})
			.finally(() => {
				setUploading(false)
			})

		// .then(() => {
		//   setFileList([]);
		//   message.success('upload successfully.');
		// })
		// .catch(() => {
		//   message.error('upload failed.');
		// })
		// .finally(() => {
		//   setUploading(false);
		// });

		// You can use any AJAX library you like
		// fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
		//   method: 'POST',
		//   body: formData,
		// })
		// .then((res) => res.json())
		// .then(() => {
		//   setFileList([]);
		//   message.success('upload successfully.');
		// })
		// .catch(() => {
		//   message.error('upload failed.');
		// })
		// .finally(() => {
		//   setUploading(false);
		// });
	}

	const props: UploadProps = {
		onRemove: (file) => {
			const index = fileList.indexOf(file)
			const newFileList = fileList.slice()
			newFileList.splice(index, 1)
			setFileList(newFileList)
		},
		beforeUpload: (file) => {
			setFileList([...fileList, file])

			return false
		},
		fileList,
	}

	const [list, setList] = useState<any[]>([])
	// useEffect(() => {
	// 	setList(new Array(10000).fill(null))
	// }, [])
	// useEffect(() => {
	// 	// 使用了并发特性，开启并发更新
	// 	startTransition(() => {
	// 		setList(new Array(10000).fill(null))
	// 	})
	// }, [])

	// useEffect(() => {
	// 	setList(new Array(10000).fill(null))
	// }, [])
	// 使用了并发特性，开启并发更新
	const deferredList = useDeferredValue(list)
	return (
		<>
			<Upload {...props}>
				<Button icon={<UploadOutlined />}>Select File</Button>
			</Upload>

			{/* <>
				{list.map((_, i) => (
					<div key={i}>{i}</div>
				))}
			</> */}
			{/* <>
				{deferredList.map((_, i) => (
					<div key={i}>{i}</div>
				))}
			</> */}

			<Button type="primary" onClick={handleUpload} disabled={fileList.length === 0} loading={uploading} style={{ marginTop: 16 }}>
				{uploading ? "Uploading" : "Start Upload"}
			</Button>
		</>
	)
}

export default App
