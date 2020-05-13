const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config()

/**
 ** MiddleWares
 */
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())





/**
 ** Routes
 */
app.use('/register', require('./routes/register'));
app.use('/posts', require('./routes/posts'));
app.use('/login',require('./routes/login'));


PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Running on PORT ${PORT}`));


/**
 * *Connection to mongoose
 */
console.log('Connecting to DB')
try{
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log(`Connectecd to DB`));
}catch(err){
    console.log(err);
}



/**
 * TODO:[x] Check and match password
 * TODO:[x] Pass whole user info at authenticateJWT
 * TODO:[] Hash Password
 * TODO:[] Add user as a foreign key to posts
 */