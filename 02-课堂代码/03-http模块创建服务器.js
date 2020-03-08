// 1. 导入 http 模块
const http = require('http');
// 2. 创建一个 web 服务器
const app = http.createServer();
// 3. 注册一个 request 事件 - 复杂
// 注意：这里是一个事件，事件需要触发才会运行对应的事件处理函数。
// 通过谁触发？客户端(浏览器)
app.on('request', (request, response) => {
    // request 请求报文(对象)
    const { method, url } = request;
    console.log('浏览器的请求方式和请求地址', method, url);
    // response 响应报文(对象)
    response.end('Success666');
});
// 4. 监听端口
app.listen(4399, () => {
    console.log('服务器启动');
});