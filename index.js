//host configuration with connection settings and commands
var host = {
 server:        {     
  host: '35.244.5.62',
  port: 22,
  userName: 'sid',
  privateKey: 'ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAksObRkXqYugpEgDk2MNCwBSo8/KagWVsgdE3TfkFC0cglkQl+xO3rEvX+NqejumBkrbozz1brAO+7vEQDbKF0hvz9WGDaz93GKxQa9MdDIytdYRundY0uA8PBoTiWG06KZvGFSOR9CzRT/Mi3P8fOktr8u2p7/w5sIdZ9ksCD1k2GdI3H8sYTv2nRRi8QFZTf7g5F5ZP6CLEtv+J/iCFdaypFci4K+HqKsv6bQGJ2GDDdzKefc+bOrQZi2Btv0FSieI5UJMSiKxoThWMXruopyamJM/A2UsTPuvsFh+RnGNQA0ea3r8CP+c55QPunTL8Cu0rZpakA8R3JUSIiFXBNw== sid',
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
