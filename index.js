const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const PORT = 8000
const HOST = '192.168.0.11'

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end(fs.readFileSync('./index.html'));
}).listen(PORT, HOST, () => {
  console.log('server started!')
});
