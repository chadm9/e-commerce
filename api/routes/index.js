var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// Include config file. Go up from routes, down into config, config.js
var config = require('../config/config');

// set up the connection with options
var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});
// Actually make the connection
connection.connect();

// router.get('/:something/:something2',(req,res, next)=>{
// 	req.cookies.url = req.body.param.something
// 	next()
// })

router.get('/productlines/get', (req, res)=>{
    const selectQuery = "SELECT * FROM productlines";
    connection.query(selectQuery,(error, results, fields)=>{
        if(error){
            res.json(error)
        }else{
            res.json(results);
        }
    });
});


module.exports = router;
