var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sanpham'
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/get', function(req, res, next) {
    pool.query('SELECT * FROM product_info;', (err, response) => {
        if (err)
            console.log(err);
        else
            res.send(response);
    });
});

module.exports = router;