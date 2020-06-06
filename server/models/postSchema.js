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
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    },
    username:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('PostModel', postSchema);