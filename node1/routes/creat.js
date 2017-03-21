var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('creat', {name:'彭艳',sex:'女'});
});

module.exports = router;