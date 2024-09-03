import { useState, useEffect } from "react"
import styles from "./index.module.scss"
import { newsApi } from "@/http/modules/tool"

export default function News() {
	const [dataNews, setDataNews] = useState<any>()

	const getNews = async () => {
		let res: any = await newsApi()
		setDataNews(res?.data?.data)
		console.log(111, res)
	}
	useEffect(() => {
		getNews()
	}, [])

	return (
		<div className={styles.NewsBox}>
			<img src={dataNews?.image}></img>
			{dataNews?.news?.map(
				(item:any, index:number) => (
					<div key={index} className={styles.NewsBoxItem}>
						<div> {item}</div>
					</div>
				)
			)}
		</div>
	)
}
