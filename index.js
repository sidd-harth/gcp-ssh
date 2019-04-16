
//host configuration with connection settings and commands
console.log('/id_rsa');
console.log('/privateKey.ppk');
            
var host = {
 server:        {     
  host: '35.244.5.62',
  port: 22,
  userName: 'sid',
  privateKey: '-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAksObRkXqYugpEgDk2MNCwBSo8/KagWVsgdE3TfkFC0cglkQl
+xO3rEvX+NqejumBkrbozz1brAO+7vEQDbKF0hvz9WGDaz93GKxQa9MdDIytdYRu
ndY0uA8PBoTiWG06KZvGFSOR9CzRT/Mi3P8fOktr8u2p7/w5sIdZ9ksCD1k2GdI3
H8sYTv2nRRi8QFZTf7g5F5ZP6CLEtv+J/iCFdaypFci4K+HqKsv6bQGJ2GDDdzKe
fc+bOrQZi2Btv0FSieI5UJMSiKxoThWMXruopyamJM/A2UsTPuvsFh+RnGNQA0ea
3r8CP+c55QPunTL8Cu0rZpakA8R3JUSIiFXBNwIBJQKCAQEAguXPrWDzpFKFfsKG
6teqPJzOCgHjv4P4/ilNAFqjokZbVZa6F0jv7LJY1wgsjUzNgtp8nSjjDwpCghVF
q1oIpqNPNMyXzlsy3qeF/02WcvoCfZHKcRj+llKessmLmvmik9AfXvY2ESENtgJd
XVI+ckNEmmVEie7Lq0hJUUnRZ6EzK4Wh8gcBobJKUX68crrrhEK50253GxKELSTU
nXPrTXHd05dU/b2Jh2FbbGw5R0W11QbY8qiVZbQfXBtC0XD4q1XDTAJ/q09c28e1
XwqhryAeDUNoGSFSgLXzZVmcaN3otl4fQh864cYxpeQmS+aDdIdL+o3jf6hafz29
uveh/QKBgQD5lnCVPEZdUjmERYFzBljtITdVYyfuDqi+gGOFJirh6REya8c3vmTU
K8ihafds40cBFuFW2whYLSHND0ccYYXh7yb+DJFHBOknB7K4VTXx6+e+4jWtRNbk
T2aj/8YUO5OuYdlus/FnmSGgq2o1Zn8fbkSWUTl+SklzZ+1RkPL6LwKBgQCWiOMT
Gfj++eT2dawY2GIgPpMqoJVvs12Bh99UhIMvHoCkvMRutdcetMx+JKBJV50Nxs17
Lduy0dfbv36hmbEjfYmeW2PXhaCTV7k3Ohyz357FkNJgzZxl05J9Ac46nahHYJgJ
Hroaklu+pmOdylRQ+vmc/HB7+83FD6ViPQdPeQKBgQCUZ0ncMa1MPrpqUtdZJl5j
e4ivT7bgkxg563lxw6rLg6lcQBWWxDvzxwGsFX5ca3ZTrL1WPQvhZvGA2KbSmtn7
9fuCTKlof3Xf2xBR7XoFd4LgM3ncpXjax212RQ3+MUMNvaPg9V8bARrp6WG+4v96
eOqC5DAF5vs9s2qDhp5PkQKBgEUqIyRzt5e+7KiW7jTtzDhUGhqBIhC6MeGRdHLw
xqbyVsg7DiUHcK0+UB5ILfgvLHvzjte7H8Dc9Hm42VEq8IXtkkHW9oWeQtvqCP2y
6pfVcnZy+OBeeEp19zKESf9BhKssYYemVYHUiwSRo2Qsh5rULX9655LpULR8z3JT
ZDlFAoGBAKyQdl7IsLSzVf1ZT47fb1W3DkpXaB5DJfj+8gH6Gj7uXu4lx3XYo3xW
hIehRf3NZjikMykA6Q/gJRIJF7l1eVdJILkieBjQX5/Ol4uxGVi/ZZzFGz5mGQAv
bFJQIHN+0yjcxMTj5laLHeoKMMW9xkuO5N8t6sIo8KzundC6lcRC
-----END RSA PRIVATE KEY-----',
  },
 commands:      [ "echo $(pwd)", "sudo mkdir abcdeer" ]
};
 
var SSH2Shell = require ('ssh2shell'),
  //Create a new instance passing in the host object
  SSH = new SSH2Shell(host),
  //Use a callback function to process the full session text
  callback = function(sessionText){
    console.log(sessionText)
  }
//Start the process
SSH.connect(callback);


/*
var Client = require('ssh2').Client;
 
var conn = new Client();
conn.on('ready', function() {
  console.log('Client :: ready');
  conn.exec('uptime', function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: '35.244.5.62',
  port: 22,
  username: 'sid',
  privateKey: '/id_rsa'
});
*/
