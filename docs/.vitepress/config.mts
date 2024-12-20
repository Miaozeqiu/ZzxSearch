import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "在浙学网课助手",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: '开始', link: '/开始/关于本站' },
      { text: '日志', link: '/开始/日志' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '关于本站', link: '/开始/关于本站' },
          { text: '外卖红包', link: '/开始/外卖红包' },
          { text: '网页插件', link: '/开始/网页插件' },
          { text: '私有题库', link: '/开始/私有题库' },
          { text: '日志', link: '/开始/日志' },
          { text: 'API', link: '/开始/API' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Miaozeqiu' }
    ]
  },
  cleanUrls: true  // 开启 cleanUrls 功能
})