"use strict"
// 导入数据库模块
const mysql = require('mysql');

const pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'bk',
    connectionLimit:20
});

Object.freeze(pool);

// 导出数据对象
module.exports=pool;