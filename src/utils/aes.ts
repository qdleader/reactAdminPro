import CryptoJS from "crypto-js";
let AesKey = import.meta.env.VITE_AES_KEY;
let CBCIV = "";
// let CBCIV = "16-Bytes--String";
// 加密选项
let CBCOptions = {
	iv: CryptoJS.enc.Utf8.parse(CBCIV),
	mode: CryptoJS.mode.CBC,
	padding: CryptoJS.pad.Pkcs7
};

// //加密
export const encrypt = (data: string) => {
	let key = CryptoJS.enc.Utf8.parse(AesKey);
	let secretData = CryptoJS.enc.Utf8.parse(data);
	let encrypted = CryptoJS.AES.encrypt(secretData, key, CBCOptions);
	return encrypted.toString();
};

export const decrypt = (data: string) => {
	let key = CryptoJS.enc.Utf8.parse(AesKey);
	let decrypt = CryptoJS.AES.decrypt(data, key, CBCOptions);
	return CryptoJS.enc.Utf8.stringify(decrypt).toString();
};
