
var wincmd = require('node-windows');
var Service = wincmd.Service;

wincmd.isAdminUser(function(isAdmin){
  if (isAdmin) {
    console.log('The user has administrative privileges.');
  } else {
    console.log('NOT AN ADMIN');
  }
});

var svc = new Service({
  name:'ThingspowerHomepage',
  description: '欣动官方网站系统启动服务',
  script: 'E:\\csite\\serve\\server.js',
  env: [{
    name: "NODE_ENV",
    value: "production"
  }, {
    name: "PORT",
    value: 3000
  }]
});

svc.on('install',function() {
  console.log('install success');
  svc.start();
});

svc.install();
