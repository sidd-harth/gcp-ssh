//host configuration with connection settings and commands
var host = {
 server:        {     
  host: '35.244.5.62',
  port: 22,
  userName: 'sid',
  privateKey: '/privateKey.ppk',
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
