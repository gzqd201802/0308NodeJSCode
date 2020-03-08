
// 1. 导入 http 模块
const http = require('http');
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
    if( url === '/index' || url === '/' ){
        // 通过<响应报文>回给客户端内容
        response.end('首页');
    }else if(url === '/list'){
        response.end('列表页');
    }else{
        // 如果是后端没有配置过的路径，统一否返回 404
        response.end('404 Not Found');
    }
});
// 4. 监听端口
app.listen(4399, () => {
    console.log('你可以直接打开浏览器访问', 'http://127.0.0.1:4399');
});
