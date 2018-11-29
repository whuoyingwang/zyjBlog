module.exports = {
  base: '/blogweb/',
  title: 'zyj的博客',
  description: '前端,博客,blog',
  head: [
    ['link', {rel: 'icon', href: '/sfz2.jpg'}],
    ['link', {rel: 'stylesheet', href: '/css/index.css', type: 'text/css'}]
  ],
  evengreen: true,
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {text: '首页', link: '/'},
      {
        text: '前端系列',
        items: [
          // {text: '目录', link: '/web/home'},
          {text: 'markdown语法', link: '/web/markdown'},
          {text: 'js系列', link: '/web/jsweb'},
          {text: 'webpack4', link: '/web/webpack4'}
        ]
      },
      {text: '设计模式', link: '/sjms/'},
      {text: '其他杂项', link: '/other/'}
    ]
  }
}