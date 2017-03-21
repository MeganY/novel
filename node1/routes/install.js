/**
 * Created by 彭艳 on 2017/1/9.
 */
var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    //增加数据
//    //连接数据库
    db.remove('admins',{},function(){
        res.send('初始化成功')
    });
    db.insert('admins',{loginId:"admin",loginPass:"123456"},function(){

    });
//    var server = new mongodb.Server("127.0.0.1",27017,{});
//    var db=new mongodb.Db('novel',server,{});
//    db.open(function(error,db){//数据库：mongotest
//        if(error) throw error;
//        db.collection('student',{safe:true},function(err, collection){
//            if(err){
//                console.log(err);
//            }else{
//                collection.insert(
//                    {
//                    studentName:'彭艳',
//                    studentSex:'女',
//                    studentId:'py',
//                    studentPass:'888888'
//                }, collection.insert({
//                        studentName:'周佳萍',
//                        studentSex:'女',
//                        studentId:'zjp',
//                        studentPass:'888888'
//                    })
//                );
//                collection.find().toArray(function(errfind,cols){
//                    res.send(JSON.stringify(cols))
//                })
//            }
//        });
//        db.collection('admins',{safe:true}, function(err, collection){
//            if(err){
//                console.log(err);
//            }else{
////                //增
////                collection.insert({
////                    loginId:'admin2',
////                    loginPass:'123456'
////                });
//                //查询
////               collection.find({_id:mongodb.ObjectId('58732e838af34c1e484d38db')}).toArray(function(errfind,cols){
////                   res.send(JSON.stringify(cols))
//
//               //模糊查询
//               //{loginId:{$regex:/.*88.*/i}}
//                //{loginId:{$regex:"88"}}
////                查询loginId属性值包含88字符的所有对象集合
////                collection.find({loginId:{$regex:/.*88.*/i}}).toArray(function(errfind,cols){
////                    res.send(JSON.stringify(cols))
//               collection.find({loginId:{$regex:/.*ad.*/i}}).limit(3).skip(2).toArray(function(errfind,cols){
//                       res.send(JSON.stringify(cols))
//               });
//                   //分页查询
//                //limit(num)  查询多少条数据出来
//                //skip(num)   跳过多少条数据
////                var ObjectID = mongodb.ObjectID;
////                //改，一般第二个参数是查询出来的对象作为修改值递进去
////                collection.update(
////                    {_id:ObjectID('58732e838af34c1e484d38db')},
////                    {
////                        loginId:'admin888',
////                        loginPass:'654321'
////                    }
////                );
//
//                //删
//                //collection.remove({_id:ObjectID('5872fd540ec942270c74fa99')});
//            }
//        });});
//    res.send('安装成功');
});

module.exports = router;