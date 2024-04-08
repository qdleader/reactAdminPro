
import { useState, useEffect, useRef } from "react"

import { ISearchRecordParams } from "./interface"
import styles from "./index.module.scss"
import { musicApi } from "@/http/modules/music"
import { Button } from "antd"

export default function Weather() {

	const [musicUrl, setMusicUrl] = useState<any[]>([])
	const [musicData, setMusicData] = useState<any>({})
	const videoRef:any = useRef();



	const getWeather = async () => {
		let res: any = await musicApi()
		console.log(111, res)
		setMusicData({
			...res?.data?.data,
		})
	}
	const doPlay = () => {
		videoRef?.current && videoRef?.current.play()
	}
	const nextSong = async () => {
		setMusicData({
			url:null
		})
		getWeather()
	}
	useEffect(() => {
		getWeather()
	}, [])


	useEffect(() => {
		console.log(musicData)
		console.log(111,musicData.url)
		if(videoRef?.current){
			if(videoRef?.current.paused){
				videoRef?.current.play()
			}
		}
	},[musicData])

	return (
		<div className={styles.musicBox}>
			<div>
				<Button onClick={doPlay}>播放</Button>
				<Button onClick={nextSong}>下一曲</Button>
			</div>
    		{musicData.url ? <video className={styles.musicBoxVideo} ref={videoRef}  controls={true} autoPlay={true} id="myPlay"><source src={musicData.url} type="audio/mpeg"/></video>:null}
			<div>
				<img className={styles.musicBoxImg} src={musicData.picurl} alt="" />
				<div>歌名：{musicData.name}</div>
				<div>作者：{musicData.artistsname}</div>
			</div>
		</div>
	)
}
