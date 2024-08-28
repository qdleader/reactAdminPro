import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://vuereact.top/api",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
			// "/api": {
			// 	target: "http://121.36.47.43:5627",
			// 	changeOrigin: true,
			// 	rewrite: (path) => path.replace(/^\/api/, ""),
			// },
			"/myweather": {
				target: "https://restapi.amap.com/",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/myweather/, ""),
			},
		},
	},
})
