
var express = require('express');
var router = express.Router();
var db = require('../database');
var Users = db.users;

// POST from main
router.post('/', function (req, res) {

  var userData = req.body;
  
  // create new user object
  var newUser = new Users({
      userName: userData.userName,
      email: userData.email,
  });

  Users.findOne({
    'email': userData.email
  }, function (err, user) {

    if (err) {

        // Error handling
        console.log("Couldn't create new user: " + userData.email + ', because of: ' + err);

        // send the error
        res.status(500).json({
            'message': 'Internal server error while creating new user.'
        });
    }

    // If the user doesn't exist, create one
    if (!user) {
        console.log('Creating a new user with the email: ' + userData.email);

      // Save new user to the database
      newUser.save(function (err, savedUser, numberAffected) {

          if (err) {
              console.log('Problem saving the user ' + userData.email + ' due to ' + err);
              res.status(500).json({
                  'message': 'Database error trying to sign up.'
              });
          }

          // Log success and return user
          console.log('Successfully created new user: ' + userData.email);

          res.status(201).json({
              'message': 'Successfully created new user',
          });

      });
    }
    // Continue if user exists
    else {
        console.log('User already exists');
        res.status(201).json({
            'message': 'User found, using ' + userData.email + ' for the email.'
        });
    }
  });
});

module.exports = router;