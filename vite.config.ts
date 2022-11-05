import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import autoImport from 'unplugin-auto-import/vite';

const viteEnv = {};
Object.keys(process.env).forEach(key => {
  if (key.startsWith('VITE_')) {
    viteEnv[`import.meta.env.${key}`] = process.env[key];
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      dts: 'src/components.d.ts',
    }),
    pluginRewriteAll(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      include: [/\.vue$/, /\.vue\?vue/],
      imports: ['vue'],
    }),
  ],
  base: './',
  server: { port: 3000 },
});
