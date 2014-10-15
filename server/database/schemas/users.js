var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the User Schema
var userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    friendName: { type: String },
    loveName: { type: String },
    petName: { type: String },
    choiceOne: {},
    choiceTwo: {},
    myTale: {}
});

// A method that's called every time a user document is saved..
userSchema.pre('save', function (next) {

    var user = this;

    // If the password hasn't been modified, move along...
    if (!user.isModified('password')) {
        return next();
    }

});

// The primary user model
var User = mongoose.model('User', userSchema);

module.exports = User;
