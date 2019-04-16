
//host configuration with connection settings and commands
var host = {
 server:        {     
  host: '35.244.5.62',
  port: 22,
  userName: 'sid',
  privateKey: '/id_rsa',
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
