/**
 * Created by ASUS on 2017/1/11.
 */
var express = require('express');
var router = express.Router();
var novelThief = require('../lib/novelThief');
var novelAuto = require('../lib/novelAuto');

/* GET home page. */
router.get('/', function(req, res, next) {
//    novelThief.getPageHtml('http://www.baidu.com',function(data){
//        res.send(data);
//    });

//    novelThief.getAllNovel(function(arr){
//        res.send(arr.join("<br/>"));
//    });

//    novelThief.getNovelInfo('http://www.qu.la/book/83/',function(novel){
//        res.send(JSON.stringify(novel));
//    });
     //运行小说第一章
    novelthief.getSection('http://www.qu.la/book/83/69739.html',function(content){
        res.send(JSON.stringify(content));
    })

});


module.exports = router;