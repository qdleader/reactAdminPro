import React, { useEffect, useState } from "react"

interface iWordsItem {
	text: string
	id: number
}

const WordCloudPage: React.FC = () => {
	//--------------------------3D 词云图 -----------------
	useEffect(() => {
		var entries = [
			//这里的fontColor设置字体颜色,fontSize设置字体大小,还有fontFamily,fontWeight,fontStyle,fontStretch这几个属性,做什么就自己研究吧
			{ label: "郁闷", fontColor: "red", fontSize: 28, url: "http://niklasknaack.blogspot.de/", target: "_button" },
			{ label: "慌张", url: "http://www.flashforum.de/", target: "_top" },
			{ label: "惊讶", url: "http://www.jqueryscript.net/", target: "_top" },
			{ label: "棒棒哒", url: "http://forum.jswelt.de/", target: "_top" },
			{ label: "很有趣", url: "https://jsfiddle.net/user/NiklasKnaack/fiddles/", target: "_top" },
			{ label: "还行", url: "http://codepen.io/", target: "_top" },
			{ label: "污染严重", url: "http://threejs.org/", target: "_top" },
			{ label: "有帮助", url: "http://webglstudio.org/", target: "_top" },
			{ label: "能走", url: "http://jscompress.com/", target: "_top" },
			{ label: "瓶颈", url: "https://tinypng.com/", target: "_top" },
			{ label: "哈哈", url: "http://caniuse.com/", target: "_top" },
			{ label: "呵呵", url: "https://goo.gl/", target: "_top" },
			{ label: "无敌", url: "http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx", target: "_top" },
			{ label: "寂寞", url: "https://twitter.com/niklaswebdev", target: "_top" },
			{ label: "杂七杂八", url: "http://nkunited.deviantart.com/", target: "_top" },
			{ label: "乱七八糟", url: "http://gulpjs.com/", target: "_top" },
			{ label: "么么哒", url: "https://www.browsersync.io/", target: "_top" },
			{ label: "去吧", url: "https://github.com/", target: "_top" },
			{ label: "来吧", url: "https://www.shadertoy.com/", target: "_top" },
			{ label: "走吧", url: "http://gamua.com/starling/", target: "_top" },
			{ label: "哈哈呵呵", url: "http://jsperf.com/", target: "_top" },
			{ label: "天天向上", url: "http://foundation.zurb.com/", target: "_top" },
			{ label: "好好学习", url: "http://createjs.com/", target: "_top" },
			{ label: "一天一个样", url: "http://julian.com/research/velocity/", target: "_top" },
			{ label: "三天打鱼两天晒网", url: "https://greensock.com/docs/#/HTML5/GSAP/TweenLite/", target: "_top" },
			{ label: "先知", url: "https://jquery.com/", target: "_top" },
			{ label: "恶魔", url: "http://www.jqueryrain.com/", target: "_top" },
			{ label: "OK", url: "http://jquery-plugins.net/", target: "_top" },
		]

		var settings = {
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
		// document.getElementById("holder")svg3DTagCloud(settings)
	}, [])

	return (
		<div>
			<div id="holder"></div>
		</div>
	)
}

export default WordCloudPage
