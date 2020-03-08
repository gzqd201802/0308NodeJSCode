// 新建的文件和 package.json 文件同级。

// 1. 导入 express 包
const express = require('express');
// 2. 创建个 express 服务器
const app = express();
// 3. 设置路由
app.get('/', (request, response) => {
    const { method, url } = request;
    console.log('请求方式和请求地址', method, url);
    // response.send() 封装的方法，自动给响应的数据添加对应的 Content-Type
    response.send('回个中文');
});

// 4. 设置端口
app.listen(3000, () => {
    console.log('服务器启动成功提示');
});