import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "在浙学题库搜索文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          { text: '鸣谢', link: '/开始/鸣谢' }, 
          { text: '日志', link: '/开始/日志' },
          { text: 'API', link: '/开始/API' }
        ],
        
      },
      {
        text: '代刷服务',
        items: [ 
          
          { text: '温州医科大学', link: '/开始/代刷服务/温州医科大学' },
          { text: '义乌工商学院', link: '/开始/代刷服务/义乌工商学院' },
          { text: '其他高校', link: '/开始/代刷服务/其他高校' },
          { text: '关于代刷的风险', link: '/开始/代刷服务/关于代刷的风险' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Miaozeqiu' }
    ]
  }
})
