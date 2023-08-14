import React, { useState, useEffect, useRef } from "react"

const ChatRoom: React.FC = () => {
	const [chatContent, setChatContent] = useState("")
	const [userName, setUserName] = useState("")
	const [sendText, setSendText] = useState("")

	const ws = useRef<WebSocket | null>(null)
	// 发送消息
	const sendMessage = (message: string) => {
		if (ws.current && ws.current.readyState === WebSocket.OPEN) {
			ws.current.send(message)
		}
	}

	const openWebSocket = () => {
		const prefixUrl = "ws://192.168.3.8:5627/ws/chatRoom/"
		// 判断当前浏览器是否支持WebSocket
		if (!("WebSocket" in window)) {
			alert("Not support websocket")
		}
		// 创建WebSocket连接对象
		ws.current = new WebSocket(`${prefixUrl}${userName}`)

		// 连接成功建立的回调方法
		ws.current.onopen = () => {
			console.log("建立连接")
		}

		// 接收到消息的回调方法
		ws.current.onmessage = (event) => {
			console.log("接收到内容：" + event.data)
			setChatContent((prev) => prev + event.data + "\n")
		}

		// 连接发生错误的回调方法
		ws.current.onerror = () => {
			console.log("发生错误")
		}

		// 连接关闭的回调方法
		ws.current.onclose = () => {
			console.log("关闭连接")
		}
	}

	// 关闭连接
	const closeWebSocket = () => {
		if (ws.current) {
			ws.current.close()
		}
	}

	useEffect(() => {
		// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
		const handleWindowClose = () => {
			closeWebSocket()
		}

		// 添加事件监听器
		window.addEventListener("beforeunload", handleWindowClose)

		return () => {
			// 清理事件监听器和WebSocket连接
			window.removeEventListener("beforeunload", handleWindowClose)
			closeWebSocket()
		}
	}, [userName])

	return (
		<div>
			<h1>聊天室</h1>
			<textarea id="chat_content" readOnly cols={100} rows={9} value={chatContent} />
			<br />
			用户：
			<input type="text" id="user_name" value={userName} onChange={(e) => setUserName(e.target.value)} name="userName" />
			<button id="btn_join" onClick={openWebSocket}>
				加入聊天室
			</button>
			<button id="btn_exit" onClick={closeWebSocket}>
				退出聊天室
			</button>
			<br />
			消息：
			<input type="text" id="send_text" value={sendText} onChange={(e) => setSendText(e.target.value)} name="sendText" />
			<button id="btn_send" onClick={() => sendMessage(sendText)}>
				发送
			</button>
		</div>
	)
}

export default ChatRoom
