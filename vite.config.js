import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Profile-Component-Card/', // ← your GitHub repo name
  plugins: [react()],
});