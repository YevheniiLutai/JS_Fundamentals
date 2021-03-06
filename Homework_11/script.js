//**** To run Task 1: comment Task 2 and uncomment Task 1 ****\\
//************************** Task_1 **************************\\
const path = require("path");
const http = require("http");
const os = require("os");

http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/html'});
response.write("<h1>System information</h1><br>"
`<p>Current user name: ${os.userInfo().username}<br>
OS type: ${os.type()}<br>
System work time: ${((os.uptime()) / 60).toFixed(2)} minutes<br>
Current work directory:  ${__dirname}<br>
Server file name: ${path.basename(__filename)}</p>`);
response.end();
}).listen(8000);
//-----------------------------------------------------------\\

//**** To run Task 2: comment Task 1 and uncomment Task 2 ****\\
//************************** Task_2 **************************\\
// const http = require("http");
// const os = require("os");
// const personalModule = require('./personalmodule');
// http.createServer((request, response) => {
// response.writeHead(200, {'Content-Type': 'text/plain'});
// response.end(`${personalModule.greet(os.userInfo().username)}`);
// }).listen(8000);
//-----------------------------------------------------------\\