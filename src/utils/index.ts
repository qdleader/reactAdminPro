

export function getParams(url: string) {
	const res: any = {};
	if (url.includes("?")) {
		const str = url.split("?")[1];
		const arr = str.split("&");
		arr.forEach(item => {
			const key = item.split("=")[0];
			const val = item.split("=")[1];
			res[key] = decodeURIComponent(val); // 解码
		});
	}
	return res;
}
