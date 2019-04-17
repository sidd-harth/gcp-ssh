//host configuration with connection settings and commands
console.log('custom-nodejs');
const https = require('https');

https.get('https://firebasestorage.googleapis.com/v0/b/fullfillment-test-2f6c1.appspot.com/o/id_rsa_onlineman47?alt=media&token=cde87cc9-0d9a-4a35-9943-d92df7486fbc', (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        var id_rsa = data;
        //console.log(abc);
        console.log(id_rsa)

        var host = {
            server: {
                host: '35.244.5.622',
                port: 22,
                userName: 'onlineman47',
                // privateKey: require('fs').readFileSync('id_rsa_onlineman47'),
                privateKey: id_rsa,
            },
            //commands:      [ "echo $(pwd)", "sudo mkdir abcdeer" ]
            commands: ["sudo -s", "export PATH=$PATH:/home/openshift-origin-client-tools-v3.9.0-191fece-linux-64bit", "oc version", "oc delete -f /home/services2/aio/istio/pay.yml"]
        };

        var SSH2Shell = require('ssh2shell'),
            //Create a new instance passing in the host object
            SSH = new SSH2Shell(host),
            //Use a callback function to process the full session text
            callback = function(sessionText) {
                console.log(sessionText)
            }
        //Start the process
        SSH.connect(callback);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});



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