// 1. 导入 http 模块
const http = require('http');
// 导入 fs 模块，用于读取文件
const fs = require('fs');
// 导入 path 模块，处理路径问题
const path = require('path');
// 2. 创建一个 web 服务器
const app = http.createServer();

// mime 不同的后缀名，对应 Content-Type 的值。
const mimes = {
    '.txt': 'text/plain;charset=UTF-8', // 普通文本
    '.html': 'text/html;charset=UTF-8', // html
    '.css': 'text/css;charset=UTF-8',   // css
    '.js': 'application/javascript;charset=UTF-8', // js
    '.json': 'application/json;charset=utf-8', // json
    '.ico': 'image/x-icon',                    // ico
    '.jpg': 'image/jpeg',                    // jpg
    '': 'text/html;charset=UTF-8',             // 无后缀名，设置为 html
};

// 3. 注册一个 request 事件 - 主要业务都在这里面
app.on('request', (request, response) => {
    // 从<请求报文>中获取请求方式和请求地址
    const { method, url } = request;
    console.log('请求方式和请求地址', method, url);
    // 获取了请求地址的后缀名
    const ext = path.extname(url);
    console.log('请求的后缀名是', ext);
    // 根据后缀名获取对应的 content-type 值，如果是 undefined，设置为 text/html
    const ct = mimes[ext] || 'text/html;charset=UTF-8';
    // 通过 response.setHeader() 给响应报文添加内容
    // 根据后缀名添加对应的 Content-Type 值
    response.setHeader('Content-Type', ct);
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
        // 如果是后端没有配置过的路由，可能是静态资源
        //      1. 不能读取静态资源，返回404
        //      2. 能读取到静态资源，返回静态资源
        // __dirname    当前文件的路径
        // www          放静态资源的文件夹
        // url          静态资源的请求 url
        // 拼接成服务器的一个资源路径
        const filePath = path.join(__dirname, 'www', url);
        console.log(filePath);
        // 根据拼接的路径读取文件
        fs.readFile(filePath,(err,data)=>{
            if(err){
                // 如果读取不到文件，返回 404 Not Found
                response.end('404 Not Found');
            }else{
                // 如果读取文件成功，返回文件内容
                response.end(data);
            }
        });
    }
});
// 4. 监听端口
app.listen(4399, () => {
    console.log('你可以直接打开浏览器访问', 'http://127.0.0.1:4399');
});
