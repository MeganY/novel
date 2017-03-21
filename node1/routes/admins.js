/**
 * Created by ASUS on 2017/1/10.
 */
var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET home page. */
router.post('/', function(req, res, next){
    //query接收前端表单POST方式传递过来的数据
    switch(req.query.ac){
        case 'checkLogin':{
            db.find(
                'admins',
                {
                    //reg.body接收前端表单POST方式传递过来的数据
                    loginId:req.body.loginId,
                    loginPass:req.body.loginPass
                },
                {},
                function(err,cols){
                    if(cols.length>0){
                        res.json({error:false, msg:'登录成功'})
                    }else{
                        res.json({error:true, msg:'用户名密码错误'})
                    }
            })
        }
            break;
        default:{
            res.json({error:true,msg:'未知请求'});
        }
            break;
    }
});
router.get('/', function(req, res, next){
    //query接收前端表单POST方式传递过来的数据
    switch(req.query.ac){
        default:{
            res.json({error:true,msg:'未知请求'});
        }
            break;
    }
});
module.exports = router;
