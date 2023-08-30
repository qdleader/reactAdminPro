import { User } from "@/http/interface"
import { empsList } from "@/http/modules/emps"
import React, { useEffect, useState } from "react"

interface iWordsItem {
	text: string
	id: number
}

const WordCloudPage: React.FC = () => {
	const [data, setData] = useState<User.ResUserListItem[]>([])

	const getList = async () => {
		let data = await empsList({ pageSize: 40 })
		console.log("emps-list", data)
		data?.data?.rows.map((item: User.ResUserListItem) => {
			item.key = item.id
			item.label = item.username
		})
		setData(data?.data?.rows)
		initGlobalData(data?.data?.rows)
	}

	const initGlobalData = (entries: User.ResUserListItem[]) => {
		// var entries = [
		// 	//这里的fontColor设置字体颜色,fontSize设置字体大小,还有fontFamily,fontWeight,fontStyle,fontStretch这几个属性,做什么就自己研究吧
		// 	{ label: "郁闷", fontColor: "red", fontSize: 28, url: "http://niklasknaack.blogspot.de/", target: "_button" },
		// 	{ label: "慌张", url: "http://www.flashforum.de/", target: "_top" },
		// ]
		let settings = {
			entries: entries, //数据
			width: 480, //宽度
			height: 480, //高度
			radius: "65%",
			radiusMin: 75,
			bgDraw: true, //是否显示背景
			bgColor: "#AFEEEE", //背景颜色
			opacityOver: 1.0,
			opacityOut: 0.05,
			opacitySpeed: 6,
			fov: 800,
			speed: 0.1, //旋转的速度
			fontFamily: "Oswald, Arial, sans-serif",
			fontSize: "18", //默认字体大小
			fontColor: "#8B4513", //默认字体颜色
			fontWeight: "normal", //bold
			fontStyle: "normal", //italic
			fontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
			fontToUpperCase: true,
			tooltipFontFamily: "Oswald, Arial, sans-serif",
			tooltipFontSize: "11",
			tooltipFontColor: "red",
			tooltipFontWeight: "normal", //bold
			tooltipFontStyle: "normal", //italic
			tooltipFontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
			tooltipFontToUpperCase: false,
			tooltipTextAnchor: "left",
			tooltipDiffX: 0,
			tooltipDiffY: 10,
		}
		let SVG3DTagCloud = window.SVG3DTagCloud
		new SVG3DTagCloud(document.getElementById("holder"), settings)
	}
	//--------------------------3D 词云图 -----------------
	useEffect(() => {
		getList()
	}, [])

	return (
		<div>
			<div id="holder"></div>
		</div>
	)
}

export default WordCloudPage
