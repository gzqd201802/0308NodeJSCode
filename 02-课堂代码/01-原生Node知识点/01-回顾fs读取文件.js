

// 按需导入处理文件读写的 fs 模块。
const fs = require('fs');

// 读取文件 - 异步写法
// ()=>{}  箭头函数在这里是作为一个参数传递，回调函数

// fs.readFile('./data/11.txt', (err, data) => {
//     // 错误处理在回调函数内部书写
//     if (err) {
//         console.log('文件读取失败');
//     } else {
//         console.log('文件读取成功：', data.toString());
//     }
// });


// 读取文件 - 同步写法
try {
    // 以返回值方式获取到数据
    const data = fs.readFileSync('./data/11.txt');
    console.log('文件读取成功：', data.toString());
} catch (error) {
    // 错误处理在 catch 结构中
    console.log('文件读取失败');
}