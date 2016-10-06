const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
//const server = http.createServer((req,res)=>{
//    res.statusCode = 200;
//    });
const server = http.createServer((req, res) => {  //创建服务器
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');//文本格式
res.end('Hello World\n');//结束响应
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });
