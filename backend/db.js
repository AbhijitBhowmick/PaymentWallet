const mongoose = require('mongoose');

//Create a user schema
const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    firstname : String,
    lastname : String
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User    
    
};