import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "在浙学网课助手",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/home/about' },
      { text: 'Log', link: '/home/log' }
    ],

    sidebar: [
      {
        text: 'Home',
        items: [
          { text: '关于', link: '/home/about' },
          { text: '外卖红包', link: '/home/takeout-red-envelopes' },
          { text: '网页插件', link: '/home/web-plugin' },
          { text: '私人题库', link: '/home/private-question-bank' },
          { text: '日志', link: '/home/log' },
          { text: 'API', link: '/home/api' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Miaozeqiu' }
    ]
  },
  cleanUrls: true  // 开启 cleanUrls 功能
})