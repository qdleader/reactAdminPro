import "@wangeditor/editor/dist/css/style.css" // 引入 css

import React, { useState, useEffect } from "react"
import { Editor, Toolbar } from "@wangeditor/editor-for-react"
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor"

interface EditorProps {
	value?: string
	onChange?: (value: string) => void
}

function MyEditor(props: EditorProps) {
	const { value, onChange } = props
	// editor 实例
	const [editor, setEditor] = useState<IDomEditor | null>(null) // TS 语法
	// const [editor, setEditor] = useState(null)                   // JS 语法

	// 编辑器内容
	const [html, setHtml] = useState(value)

	// 模拟 ajax 请求，异步设置 html
	useEffect(() => {
		// setTimeout(() => {
		// 	setHtml("<p>hello world1</p>")
		// }, 1500)
		setHtml(value)
	}, [value])

	// 工具栏配置
	const toolbarConfig: Partial<IToolbarConfig> = {} // TS 语法
	// const toolbarConfig = { }                        // JS 语法

	// 编辑器配置
	const editorConfig: Partial<IEditorConfig> = {
		// TS 语法
		// const editorConfig = {                         // JS 语法
		placeholder: "请输入内容...",
	}
	const changeHtml = (editor: IDomEditor) => {
		setHtml(editor.getHtml())
		onChange?.(editor.getHtml())
	}
	// 及时销毁 editor ，重要！
	useEffect(() => {
		return () => {
			if (editor == null) return
			editor.destroy()
			setEditor(null)
		}
	}, [editor])

	return (
		<>
			<div style={{ border: "1px solid #ccc", zIndex: 100 }}>
				<Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" style={{ borderBottom: "1px solid #ccc" }} />
				<Editor
					defaultConfig={editorConfig}
					value={html}
					onCreated={setEditor}
					onChange={(editor) => {
						changeHtml(editor)
					}}
					mode="default"
					style={{ height: "500px", overflowY: "hidden" }}
				/>
			</div>
			<div style={{ marginTop: "15px" }}>{html}</div>
		</>
	)
}

export default MyEditor
