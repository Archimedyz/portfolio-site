import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [vue()],
    define: {
      __COMMIT_HASH__: JSON.stringify(env.VITE_COMMIT_HASH || '<no hash>'),
    },
  };
});