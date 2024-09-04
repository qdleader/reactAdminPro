import { useState, useEffect } from "react"

import {  weatherData } from "./interface"
import styles from "./index.module.scss"
import { weatherApi } from "@/http/modules/tool"

export default function Weather() {

	const [dataWeather, setDataWeather] = useState<any[]>([])
	const getWeather = async () => {
		let res: any = await weatherApi()
		setDataWeather(res?.data?.data)
	}

	useEffect(() => {
		getWeather()
	}, [])

	return (
		<div className={styles.weatherBox}>
			{dataWeather.map(
				(item, index) => (
					<div key={index} className={styles.weatherBoxItem}>
						<img src={weatherData[item.wea_day]}></img>
						<div>天气: {item.wea_day}</div>
						<div>
							日期：{item.date} 
						</div>
						<div>
							温度：{item.temp_night} - {item.temp_day}
						</div>
					</div>
				)

				// <img src={weatherData?[item.type + ""]} alt="" />
			)}
			{/* <img src={weatherData} alt="" v-if="item.type == '中雨'" /> */}
		</div>
	)
}
