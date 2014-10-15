var express = require('express');
var session = require('express-session');
var path = require('path');
var flash = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');
var tale = require('./routes/tale');
// var tale = require('./routes/tale');
// var tale = require('./routes/tale');
// var tale = require('./routes/tale');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'i like pie',
                saveUninitialized: false,
                resave: false}));
app.use(flash());


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

app.use('/main', tale);

module.exports = app;
