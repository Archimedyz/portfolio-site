import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  const deployPath = process.env.DEPLOYPATH;

  if (mode === 'production' && deployPath) {
    return {
      plugins: [vue()],
      build: {
        outDir: deployPath,
        emptyOutDir: true,
      },
      base: '/',
    };
  } else {
    return {
      plugins: [vue()],
      base: '/',
    };
  }
});