// 导入服务器组件
const express = require('express');
// 导入数据处理组件,post请求
const bodyParser = require('body-parser');


// 导入路由
const userRouter = require('./routers/user');
const ajaxRouter = require('./routers/ajax');

// 创建服务器对象，设置监听 
const app = express();
app.listen(8080, ()=>{
    console.log('Server Listening on 8080...');
});

app.use( bodyParser.urlencoded({
    extended:false
}));


// 托管静态文件
// app.use(express.static('public/html'));
// app.use(express.static('public/img'));
// app.use(express.static('public/css'));
// app.use(express.static('public/js'));
app.use(express.static('public'));


//使用路由
app.use('/user',userRouter);
app.use('/ajax',ajaxRouter);