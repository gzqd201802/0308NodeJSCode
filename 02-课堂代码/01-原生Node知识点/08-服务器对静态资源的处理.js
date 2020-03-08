// 1. 导入 http 模块
const http = require('http');
// 导入 fs 模块，用于读取文件
const fs = require('fs');
// 导入 path 模块，处理路径问题
const path = require('path');
// 2. 创建一个 web 服务器
const app = http.createServer();
// 3. 注册一个 request 事件 - 主要业务都在这里面
app.on('request', (request, response) => {
    // 从<请求报文>中获取请求方式和请求地址
    const { method, url } = request;
    console.log('请求方式和请求地址', method, url);
    // 通过 response.setHeader() 给响应报文添加内容
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    // 通过分支实现不同的 url ，响应不同的内容
    if (url === '/index' || url === '/') {
        // 通过<响应报文>回给客户端内容
        // response.end('首页');
        // 读取文件，正确的路径很重要。
        const filePath = path.join(__dirname, './www/index.html');
        // debugger;
        fs.readFile(filePath, (err, data) => {
            if (err) {
                response.end('读取错误，拒绝访问');
            } else {
                response.end(data);
            }
        });

    } else if (url === '/list') {
        response.end('列表页');
    } else {
        // 如果是后端没有配置过的路径，统一否返回 404
        // __dirname    当前文件的路径
        // www          放静态资源的文件夹
        // url          静态资源的请求 url
        // 拼接成服务器的一个资源路径
        const filePath = path.join(__dirname, 'www', url);
        console.log(filePath);
        // 根据拼接的路径读取文件
        fs.readFile(filePath,(err,data)=>{
            if(err){
                response.end('404 Not Found');
            }else{
                response.end(data);
            }
        });
    }
});
// 4. 监听端口
app.listen(4399, () => {
    console.log('你可以直接打开浏览器访问', 'http://127.0.0.1:4399');
});
