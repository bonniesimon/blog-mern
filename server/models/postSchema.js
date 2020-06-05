const mongoose = require('mongoose');

const userModel = require('./Users');



const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now()
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    }
})

module.exports = mongoose.model('PostModel', postSchema);