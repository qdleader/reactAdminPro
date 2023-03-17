import { useCallback, useEffect, useRef } from "react";
import { Common } from "@/api/interface/common";
import { IRegion } from "@/views/channel/clueManager/interface";

/**
 * 编辑地区下拉框数据
 * @param regions 原始数据
 * @returns
 */
export const editRegionData = (regions: Common.ResRegions[] = []) => {
	const firstLocals: IRegion[] = [];
	regions.forEach(item => {
		firstLocals.push({
			id: `${item.id}`,
			value: item.name,
			label: item.name,
			subRegions: editRegionData(item.subRegions)
		});
	});
	return firstLocals;
};

// 防抖
export function useDebounce(fn: any, delay: number, dep = []) {
	const { current } = useRef<any>({ fn, timer: null });
	useEffect(
		function () {
			current.fn = fn;
		},
		[current, fn]
	);

	return useCallback(
		function f(...args: any[]) {
			if (current.timer) {
				clearTimeout(current.timer);
			}
			current.timer = setTimeout(() => {
				current.fn.call(f, ...args, dep);
			}, delay);
		},
		[current, delay, dep]
	);
}

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
