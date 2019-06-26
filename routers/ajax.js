const express = require('express');
const pool = require('../pool');

const router = express.Router();


router.get('/v1/regname/:uname',(req,res)=>{
    let $uname = req.params.uname;
    pool.query(`select uid from user where uname=?`,[$uname],(err,values)=>{
        if(err) throw err;
        if(values.length>0){
            res.send({
                code:1,
                msg:'用户名不可用!'
            });
        }else{
            res.send({
                code:0,
                msg:'用户名可以使用!'
            });
        }
    });
});

router.get('/v1/uname/:uname',(req,res)=>{
    let $uname = req.params.uname;
    pool.query(`select uid from user where uname=?`,[$uname],(err,values)=>{
        if(err) throw err;
        if(values.length>0){
            res.send({
                code:1,
                msg:'用户名正确！'
            });
        }else{
            res.send({
                code:0,
                msg:'用户不存在！'
            });
        }
    });
});



router.get('/v1/resmsg/:uname&:email',(req,res)=>{
    let $uname = req.params.uname;
    let $email = req.params.email;
    let sql = `select uid from user where uname=? and email=?`
    pool.query(sql,[$uname,$email],(err,values)=>{
        if(err) throw err;
        if(values.length>0){
            res.send({
                code:1
            });
        }else{
            res.send({
                code:0,
                msg1:'用户不存在',
                msg2:'email不匹配'
            });
        }
    });
});


router.put('/v1/respwd',(req,res)=>{
    let obj = req.body;
    console.log(obj);
});



module.exports = router;