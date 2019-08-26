// module.exports = {
//   title: 'Hello VuePress',
//   description: 'Just playing around'
// }

const navConf = require('../../config/navConf.js');
const sidebarConf = require('../../config/sidebarConf/index.js');

module.exports = {
  title: ' ok的文档',
  description: 'ok的文档, vuepress 文档',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    nav: navConf,
    sidebar:sidebarConf,
  },
}
