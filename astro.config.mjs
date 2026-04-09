import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 替换为你真实的 GitHub 用户名
  site: 'https://qiao13822919184-byte.github.io',

  // 替换为你的仓库名（必须以 / 开头）
  base: '/test_2',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});