var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// var routes = require('./routes/index');
// var users = require('./routes/users');
var startTale = require('./routes/startTale');
var questionOne = require('./routes/questionOne');
var questionTwo = require('./routes/questionTwo');
var questionThree = require('./routes/questionThree');
var myTale = require('./routes/myTale');


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Development Settings

if (app.get('env') === 'development') {

  app.use(express.static(path.join(__dirname, '../client')));
  app.use(express.static(path.join(__dirname, '../client/.tmp')));
  app.use(express.static(path.join(__dirname, '../client/app')));

}

// Production Settings

if (app.get('env') === 'production') {

  app.use(express.static(path.join(__dirname, '/dist')));

}

// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

app.use('/main', startTale);
app.use('/questionOne', questionOne);
app.use('/questionTwo', questionTwo);
app.use('/questionThree', questionThree);
app.use('/myTale', myTale);

module.exports = app;
