import { defineConfig } from './main'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	plugins: [react()],
})
