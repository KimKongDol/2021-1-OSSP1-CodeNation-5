const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },

    teams: {
        type: [String]
    },

    image: {
        type: String
    } 
});

const User = mongooser.model('User', userSchema);

module.exports = {User};