'use strict';
var express = require('express');
var router = express.Router();

/* GET Lab2 page. */ 
router.get('/', function (req, res) {

    var value1;

    var value2;

    var answer;

    // res.render('index', { title: 'Express' });
    if (req.query.method) {
       /* if (req.query.method != 'add' || req.query.method != 'subtract'
            || req.query.method != 'multiply' || req.query.method != 'divide' ) {

            res.send('Error your method ' + req.query.method + ' is not supported');
        } */
        if (req.query.method == 'add') {
            if (req.query.x && req.query.y) {

                value1 = parseInt(req.query.x);

                value2 = parseInt(req.query.y);

                answer = value1 + value2;

                res.send('' + String(value1) + ' + ' + String(value2) + ' = ' + String(answer));

            }
        } else if (req.query.method == 'subtract') {

            if (req.query.x && req.query.y) {

                value1 = parseInt(req.query.x);

                value2 = parseInt(req.query.y);

                answer = value1 - value2;

                res.send('' + String(value1) + ' - ' + String(value2) + ' = ' + String(answer));

            }
        } else if (req.query.method == 'multiply') {

            if (req.query.x && req.query.y) {

                value1 = parseInt(req.query.x);

                value2 = parseInt(req.query.y);

                answer = value1 * value2;

                res.send('' + String(value1) + ' x ' + String(value2) + ' = ' + String(answer));

            }

        } else if (req.query.method == 'divide') {

            if (req.query.x && req.query.y) {

                value1 = parseInt(req.query.x);

                value2 = parseInt(req.query.y);

                answer = value1 / value2;

                res.send('' + String(value1) + ' / ' + String(value2) + ' = ' + String(answer));

            }

        } else {
            res.send('Error your method ' + req.query.method + ' is not supported');
        }

        } else {
        res.send('Lab2 screen');
    }
});

module.exports = router;
