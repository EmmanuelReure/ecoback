var mongoose = require('../models/bdd');

var userSchema = mongoose.Schema({
    fistname: String,
    lastname: String,
    email: String,
    password: String
})

var userModel = mongoose.model('users', userSchema)
module.exports = userModel;

