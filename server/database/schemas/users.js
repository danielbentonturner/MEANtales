var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the User Schema
var userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile: {} // for extra information you may / may not want
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
