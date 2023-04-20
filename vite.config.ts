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
			// "/api": {
			// 	target: "http://localhost:3000",
			// 	changeOrigin: true,
			// 	rewrite: (path) => path.replace(/^\/api/, ""),
			// },
			"/api": {
				target: "http://39.105.192.202:5627",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
})
