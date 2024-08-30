
var wincmd = require('node-windows');
var Service = wincmd.Service;

wincmd.isAdminUser(function(isAdmin){
  if (isAdmin) {
    console.log('The user has administrative privileges.');
	var svc = new Service({
	  name:'ThingspowerHomepage',
	  script: 'E:\\csite\\serve\\server.js',
	});

	svc.on('uninstall',function(){
	  console.log('Uninstall complete.');
	});

	svc.uninstall();
  } else {
    console.log('NOT AN ADMIN');
  }
});


