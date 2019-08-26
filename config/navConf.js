// config/navConf.js
module.exports = [
  { text: 'Home', link: '/' },
  { text: '个人', link: '/person/' },
  { text: 'Guide', link: '/guide/' },
  { text: '系统', items: [
    { text: 'centos', link: '/OS/centos/' },
    { text: 'manjaro', link: '/OS/manjaro/' },
    { text: 'windows', link: '/OS/windows/' },
  ]},
  { text: '基础', items: [
    { text: 'Algorithm', link: '/base/algorithm/' },
    { text: 'Interview', link: '/base/interview/' },
    { text: 'Clean', link: '/base/clean/' },
    { text: 'Git', link: '/base/git/' },
  ]},
  {
    text: '开发',
    items: [
      { text: 'FrontEnd', items: [
        { text: 'JavaScript', link: '/FrontEnd/javascript/' },
        { text: 'CSS', link: '/FrontEnd/css/' },
        { text: 'Webpack', link: '/FrontEnd/webpack/' },
        { text: 'Nodejs', link: '/FrontEnd/nodejs/' },
      ]},
      { text: 'BackEnd', items: [
        { text: 'Koa', link: '/BackEnd/koa/' },
        { text: 'MongoDB', link: '/BackEnd/mongodb/' },
        { text: 'Nginx', link: '/BackEnd/nginx/' },
      ] },
    ]
  }
];
