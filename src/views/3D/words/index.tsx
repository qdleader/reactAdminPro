import React, { useEffect, useState } from "react"
import WordCloud from "wordcloud"

interface iWordsItem {
	text: string
	id: number
}

const WordCloudPage: React.FC = () => {
	const [words, setWords] = useState<string[]>([])

	useEffect(() => {
		// 模拟从 API 获取词云数据
		const fetchData = async () => {
			try {
				// const response = await fetch("https://api.example.com/word-cloud-data")
				// const data = await response.json()

				let data = ["希芸", "希芸", "希芸", "希芸", "希芸", "希芸", "希芸"]
				setWords(data)
			} catch (error) {
				console.error("Failed to fetch word cloud data:", error)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		// 在组件挂载后初始化词云图
		const container = document.getElementById("word-cloud-container")
		if (container) {
			WordCloud(container, {
				list: words.map((word) => [word, Math.random() * 10 + 1]),
				gridSize: 8,
				weightFactor: 10,
				// tooltip: {
				// 	enabled: true,
				// 	formatter: (item) => `${item[0]}: ${item[1]}`,
				// },
				hover: (item: any, dimension: any, event: any) => {
					// 添加悬停样式
					event.target.style.fontWeight = "bold"
				},
				// mouseout: (item: any, _dimension: any, event: any) => {
				// 	// 移除悬停样式
				// 	event.target.style.fontWeight = "normal"
				// },
			})
			// 监听点击事件
			container.addEventListener("click", handleWordClick)
		}
		return () => {
			// 移除事件监听器
			container?.removeEventListener("click", handleWordClick)
		}
	}, [words])
	const handleWordClick = (event: MouseEvent) => {
		const clickedWord = event.target as HTMLElement
		const wordId = clickedWord.getAttribute("data-word-id")
		if (wordId) {
			// 在这里处理点击词语的逻辑
			console.log("Clicked word ID:", wordId)
		}
	}
	return (
		<div>
			<div id="word-cloud-container" style={{ width: "800px", height: "500px" }}>
				{words.map((word: any, index) => (
					<span key={index} data-word-id={index}>
						{word.text}
					</span>
				))}
			</div>
		</div>
	)
}

export default WordCloudPage
