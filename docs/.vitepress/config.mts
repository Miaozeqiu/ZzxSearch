import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "在浙学网课助手",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: '首页', link: '/home/about' },
      { text: '日志', link: '/home/log' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '关于我们', link: '/home/about' },
          { text: '网页插件', link: '/home/web-plugin' },
          { text: '常见问题', link: '/home/frequently-asked-questions'},
          { text: '私人题库', link: '/home/private-question-bank' },
          { text: '日志', link: '/home/log' },
          { text: 'API', link: '/home/api' },
          { text: '外卖红包', link: '/home/takeout-red-envelopes' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Miaozeqiu' }
    ]
  },
  cleanUrls: true  // 开启 cleanUrls 功能
})