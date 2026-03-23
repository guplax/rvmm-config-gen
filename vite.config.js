import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

// https://vitejs.dev/config/
const c = defineConfig({
  plugins: [sveltekit()]
});

export default c
