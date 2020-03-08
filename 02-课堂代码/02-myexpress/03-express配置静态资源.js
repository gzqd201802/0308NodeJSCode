// 新建的文件和 package.json 文件同级。

// 1. 导入 express 包
const express = require('express');
// 按需导入 path 模块
const path = require('path');

// 2. 创建个 express 服务器
const app = express();

// 百度一下关键词：  express 静态      滚到底部，CV大法 - 改成自己的 www 文件夹名称
app.use('/', express.static(path.join(__dirname, 'www')));

// 3. 设置首页路由
app.get('/', (request, response) => {
    const { method, url } = request;
    console.log('请求方式和请求地址', method, url);
    // response.send() 封装的方法，自动给响应的数据添加对应的 Content-Type
    response.send('首页');
});

// 设置列表页路由
app.get('/list', (request, response) => {
    response.send('列表页');
});

// 4. 设置端口
app.listen(3000, () => {
    console.log('服务器启动成功提示');
});