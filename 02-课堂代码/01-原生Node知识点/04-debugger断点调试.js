const fn = () => {
    console.log(555);
    console.log(666);
};
console.log(111);
console.log(222);
debugger;       // 断点调试
fn();
console.log(333);
console.log(444);


// 自行观察编辑器左侧的 - <变量面板>
// Local  - 当前 js 局部的(独立的模块)
//    1. this            就是个空对象
//    2. __dirname       当前文件的 <目录>绝对路径
//    3. __filename      当前文件的 <文件>绝对路径
//    4. require()       用来导入模块的函数
//    5. module          用于导出模块的(后面会讲解到)
//    6. exports         用于导出模块的便捷写法

// Global - 全局的
//    平时都不用点开它，就是一些全局的功能而已。
