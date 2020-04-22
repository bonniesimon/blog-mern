const mongoose = require('mongoose');


const User = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    created:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('userModel', User);
/**
 * !import this as userModel
 */
