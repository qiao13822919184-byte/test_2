import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// export default defineConfig({
//   // 替换为你真实的 GitHub 用户名
//   site: 'https://qiao13822919184-byte.github.io',

//   // 替换为你的仓库名（必须以 / 开头）
//   base: '/test_2',

//   vite: {
//     plugins: [tailwindcss()],
//   },

//   integrations: [sitemap()],
// });

// 修改为阿里云域名_260409
export default defineConfig({
  // 把这里换成你刚刚购买的绝对域名（建议带上 www）
  site: 'https://www.mteng.ltd', 
  
  // ⛔️ 核心避坑：必须删除或注释掉下面这行！否则 CSS 会全部 404
  // base: '/你的仓库名', 
  
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()]
});