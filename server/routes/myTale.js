var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var db = require('../database');
var Users = db.users;

// POST from myTale
router.post('/', function (req, res) {

  var userData = req.body;

  Users.findOne({
    'email': userData.email
  }, function (err, user) {

    if (err) {

      // Error handling
      console.log("Couldn't update user: " + userData.email + ', because of: ' + err);

      // send the error
      res.status(500).json({
          'message': 'Internal server error while updating new user.'
      });
    }

    // If the user doesn't exist, throw error
    if (!user) {
      // Error handling
      console.log("Couldn't update user: " + userData.email + ", because the user doesn't exist");

      // send the error
      res.status(500).json({
          'message': 'Internal server error while updating user.'
      });
    }
    // Continue if user exists
      else {
        user.update({
          choiceOne: userData.myTale
        });
        if (err) {
          console.log('Problem saving the user ' + userData.email + ' due to ' + err);
          res.status(500).json({
              'message': 'Database error trying to update user.'
          });
        } else {

          // Log success and return user
          console.log('Successfully updated user: ' + userData.email);

          res.status(201).json({
              'message': 'Successfully updated user!',
          });
        }
      }
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'meantales@gmail.com',
        pass: 'temptemp!'
      }
    });
    transporter.sendMail({
      from: 'meantales@gmail.com',
      to: userData.email,
      subject: 'Your MEAN Tale!',
      text: userData.myTale
    });
  });
});

module.exports = router;