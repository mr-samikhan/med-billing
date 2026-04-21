import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app':        path.resolve(__dirname, 'src/app'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks':      path.resolve(__dirname, 'src/hooks'),
      '@modules':    path.resolve(__dirname, 'src/modules'),
      '@utils':      path.resolve(__dirname, 'src/utils'),
      '@constants':  path.resolve(__dirname, 'src/constants'),
      '@config':     path.resolve(__dirname, 'src/config'),
      '@theme':      path.resolve(__dirname, 'src/theme'),
      '@router':     path.resolve(__dirname, 'src/router'),
      '@assets':     path.resolve(__dirname, 'src/assets'),
    },
  },
});
