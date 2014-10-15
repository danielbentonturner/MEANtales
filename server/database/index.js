var mongoose = require('mongoose');

// Connections
var development = 'mongodb://localhost/test';
var production = 'urlToYourProductionMongoDb';
var dbInstance;

// Development
if (process.env.NODE_ENV === 'development') {
    // set our database to the development one
    dbInstance = development;
    // connect to it via mongoose
    mongoose.connect(dbInstance);
}

// Production
if (process.env.NODE_ENV === 'production') {
    dbInstance = production;
    mongoose.connect(dbInstance);
}

// get an instance of our connection to our database
var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));
// Open the connection
db.once('open', function callback () {
  console.log('Successfully connected to ' + dbInstance);
});

var UserModel = require('./schemas/users');

// Open the connection
db.once('open', function callback () {
  console.log('Successfully connected to ' + dbInstance);
});

exports.users = UserModel;