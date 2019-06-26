const express = require('express');
const pool = require('../pool');

// 创建路由对象
const router = express.Router();



// 处理登陆的路由
router.post('/login',(req,res)=>{
    var obj = req.body;
    if(!obj.uname){
        res.send({
            code:301,
            msg:'uname require'
        });
        return;
    }else if(!obj.upwd){
        res.send({
            code:302,
            msg:'upwd require'
        });
        return;
    }
    pool.query(`select * from user where uname=? and upwd=?`,[obj.uname,obj.upwd],(err,values)=>{
        if(err) throw err;
        if(values.length>0){
            res.redirect('/main.html');
        }else{
            res.send({
                code:404,
                msg:'not find'
            });
        }
    });
});

// 处理注册的路由
router.post('/reg',(req,res)=>{
    var obj = req.body;
    var num = 400;
    for(var i in obj){
        num++;
        if(!obj[i]){
            res.send({
                code:num,
                msg:i + ' require'
            });
            return;
        }
    }
    pool.query(`insert into user SET ?`,[obj],(err,values)=>{
        if(err){
            res.send({
                code:303,
                msg:'uname unique'
            });
            return;
        }
        if(values.affectedRows>0){
            res.redirect('/login.html');
        }else{
            res.redirect('/register.html');
        }
    });

});


//处理删除的路由
router.get('/delete',(req,res)=>{
    var obj = req.query;
    if(!obj.uid){
        res.send({
            code:301,
            msg:'uid require'
        });
        return;
    }
    pool.query(`delete from user where uid=?`,[obj.uid],(err,values)=>{
        if(err) throw err;
        if(values.affectedRows>0){
            res.send({
                code:200,
                msg:'delete sucess'
            });
        }else{
            res.send({
                code:404,
                msg:'not find'
            });
        }
    });
});

// 处理检索的路由
router.get('/detail',(req,res)=>{
    var obj = req.query;
    if(!obj.uid){
        res.send({
            code:301,
            msg:'uid require'
        });
        return;
    }
    pool.query(`select * from user where uid=?`,[obj.uid],(err,values)=>{
        if(err) throw err;
        if(values.length>0){
            res.send(values);
        }else{
            res.send({
                code:404,
                msg:'not find'
            })
        }
    })
})

// 处理数据请求list的路由
router.get('/list',(req,res)=>{
    var obj = req.query;
    if(!obj.pno){
        obj.pno = 1
    }else{
        obj.pno -= 0
    }
    if(!obj.size){
        obj.size = 2
    }else{
        obj.size -= 0
    }
    var start = (obj.pno-1)*obj.size;
    var pag = obj.size;
    pool.query(`select * from user limit ?,?`,[start,pag],(err,values)=>{
        if(err) throw err;
        if(values.length>0){
            res.send(values);
        }else{
            res.send({
                code:404,
                msg:'not find'
            });
        }
    });
});



// 处理更新的路由
router.get('/update',(req,res)=>{
    var obj = req.query;
    var num = 400;
    for(var i in obj){
        num++;
        if(!obj[i]){
            res.send({
                code:num,
                msg:i + ' require'
            });
            return;
        }
    }
    pool.query(`update user set email=?,phone=?,user_name=?,gender=? where uid=?`,[obj.email,obj.phone,obj.user_name,obj.gender,obj.uid],(err,values)=>{
        if(err) throw err;
        console.log(values)
        if(values.affectedRows>0){
            res.send({
                code:200,
                msg:'update sucess'
            });
        }else{
            res.send({
                code:404,
                msg:'not find'
            });
        }
    });
});


// 导出路由
module.exports = router;