var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// Include config file. Go up from routes, down into config, config.js
var config = require('../config/config');

var bcrypt = require('bcrypt-nodejs');
var randToken = require('rand-token');

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

router.post('/register', (req, res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const accountType = 'customer';
    const password = bcrypt.hashSync(req.body.password);
    const city = req.body.city;
    const state = req.body.state;
    const salesRep = req.body.salesRep;
    const creditLimit = 16000000;
    var insertIntoCust = 'INSERT INTO customers (customerName, city, state, salesRepEmployeeNumber, creditLimit) VALUES (?,?,?,?,?)';

    var insertQuery = 'INSERT INTO users (uid, type, password, created, token) VALUES (?,?,?,?,?)';

    var currTimeStamp = Date.now()/1000;

    connection.query(insertIntoCust, [name, city, state, 1337,creditLimit], (error, results)=>{
        console.log(error);
        console.log(results);
        const newID = results.insertId;

        var token = randToken.uid(40);

        connection.query(insertQuery, [newID, accountType, password, currTimeStamp,token], (error2, results2)=>{
            if(error2){
                res.json({
                    msg: error2
                })

            }else{
                res.json({
                    msg: 'userInserted',
                    token: token
                })
            }
        });


    });




});


module.exports = router;
