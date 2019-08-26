// config/sidebarConf/OS/centos/index.js
const utils = require('../../../../utils/index.js');
const children = [
  ['','默认'],
  ['01-add-user','添加用户'],
  ['02-login-with-rsa-key','添加登录钥匙'],
  ['03-upload-file-to-server','上传文件']
];

module.exports = [
  utils.genSidebar('CentOS', children),
];
